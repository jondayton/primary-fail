export default function() {
  this.transition(
    this.hasClass('fader'),
    this.use('fade', {duration: 500})
  );
}
