import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HeroSlider from './HeroSlider';
import userEvent from '@testing-library/user-event';

vi.mock('./components/SlideIndicator.jsx', () => ({
  default: (props) => <button data-testid="slideIndicator" {...props} />,
}));
vi.mock('./components/SliderBar.jsx', () => ({
  default: (props) => <div data-testid="sliderBar" {...props} />,
}));
vi.mock('../../components/ImageWrapper/ImageWrapper.jsx', () => ({
  default: (props) => (
    <div data-testid="imageWrapper" data-img-src={props.imgSrc} {...props} />
  ),
}));
vi.mock('../../components/ImageOverlay/ImageOverlay.jsx', () => ({
  default: (props) => <div data-testid="imageOverlay" {...props} />,
}));

describe('HeroSlider feature', () => {
  const displays = [
    {
      img: { src: 'image1.jpg' },
      overlay: { header: 'Header 1', text: 'Text 1', action: {}, position: {} },
    },
    {
      img: { src: 'image2.jpg' },
      overlay: { header: 'Header 2', text: 'Text 2', action: {}, position: {} },
    },
    {
      img: { src: 'image3.jpg' },
    },
  ];
  it('Renders correctly', () => {
    render(<HeroSlider displays={displays} data-testid="heroSlider" />);
    expect(screen.getByTestId('heroSlider'));
  });
  it('Renders the correct number of indicators', () => {
    render(<HeroSlider displays={displays} />);
    expect(screen.getAllByTestId('slideIndicator')).toHaveLength(
      displays.length,
    );
  });
  it('Auto rotates correctly', async () => {
    vi.useFakeTimers();
    vi.runOnlyPendingTimersAsync();
    render(<HeroSlider displays={displays} />);
    await waitFor(() => {
      expect(screen.getByTestId('imageWrapper')).toHaveAttribute(
        'data-img-src',
        'image1.jpg',
      );
    });
    vi.advanceTimersByTime(6000);
    await waitFor(() => {
      expect(screen.getByTestId('imageWrapper')).toHaveAttribute(
        'data-img-src',
        'image2.jpg',
      );
    });
    vi.advanceTimersByTime(6000);
    await waitFor(() => {
      expect(screen.getByTestId('imageWrapper')).toHaveAttribute(
        'data-img-src',
        'image3.jpg',
      );
    });
  });
  it('Renders correct slide on indicator click', async () => {
    const user = userEvent.setup();
    vi.useFakeTimers();
    vi.runOnlyPendingTimersAsync();
    render(<HeroSlider displays={displays} />);
    const indicators = screen.getAllByTestId('slideIndicator');
    indicators.forEach(async (indicator, index) => {
      await user.click(indicator);
      expect(
        screen
          .getByTestId('imageWrapper')
          .toHaveAttribute('data-img-src', `image${index + 1}`),
      );
    });
  });
  it('Renders ImageOverlay', () => {
    render(<HeroSlider displays={displays} />);
    const overlay = screen.getByTestId('imageOverlay');
    expect(overlay).toBeInTheDocument();
  });
});
