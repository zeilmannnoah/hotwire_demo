import { Controller } from "@hotwired/stimulus"
import moment from 'moment';

export default class extends Controller {
  static targets = ["time"]
  static values = { date: String } // We'll pass the updated_at date here

  connect() {
    this.update();

    this.timer = setInterval(() => {
      this.update()
    }, 1000)
  }

  update() {
    this.timeTarget.textContent = moment(dateValue).fromNow()
  }

  disconnect() {
    // Prevent memory leaks when this controller is removed
    clearInterval(this.timer)
  }
}
