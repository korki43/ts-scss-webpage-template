import './style/main.scss';
import hmr from './hmr';

if (IS_DEV) {
  hmr();
}

console.log('Hello World!');
