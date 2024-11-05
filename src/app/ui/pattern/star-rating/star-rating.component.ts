import { CommonModule, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  NgModule,
  signal,
  ViewEncapsulation,
} from '@angular/core';

const range = 10;
const numStars = 5;

@Component({
  selector: 'ui-star-rating',
  template: `
    <span class="tooltip">
      {{ tooltipText() }}
    </span>
    <div class="stars">
      @for (fill of stars(); track fill) {
        <span
          class="star"
          [ngClass]="{
            'star-half': fill === 0,
            'star-empty': fill === -1,
          }"
          >★</span
        >
      }
    </div>
    @if (showRating) {
      <div class="rating-value">{{ rating }}</div>
    }
  `,
  styleUrls: [
    'star-rating.component.scss',
    '../../component/tooltip/_tooltip.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [NgClass],
})
export class StarRatingComponent {
  range = range;
  numStars = numStars;
  @Input() showRating = false;
  tooltipText = computed(() => `${this._rating()} average rating`);

  private readonly _rating = signal(5);

  stars = computed(() => {
    const scaledRating = this._rating() / (this.range / this.numStars);
    const full = Math.floor(scaledRating);
    const half = scaledRating % 1 > 0.5 ? 1 : 0;
    const empty = this.numStars - full - half;
    return new Array(full)
      .fill(1)
      .concat(new Array(half).fill(0))
      .concat(new Array(empty).fill(-1));
  });

  @Input()
  set rating(rating: number | undefined) {
    this._rating.set(rating || 0);
  }
  get rating(): number {
    return this._rating();
  }
}

@NgModule({
  imports: [CommonModule, StarRatingComponent],
  exports: [StarRatingComponent],
})
export class StarRatingModule {}
