import Rellax from 'rellax';
import { IS_MOBILE } from './utils';

export default function parallax() {
    if (IS_MOBILE) return;
    const rellax = new Rellax('.rellax', {
        breakpoints:[576, 768, 1201]
    });
}
