import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "count", "submit"]

  connect() {
    this.updateCount()
    this.toggleSubmit()
  }

  updateCount() {
    let length = this.inputTarget.value.length
    this.countTarget.textContent = `${length}/200 characters`
    this.toggleSubmit();
  }

  toggleSubmit() {
    // Disable submit if there's no content
    if (this.inputTarget.value.trim().length === 0) {
      this.submitTarget.disabled = true
    } else {
      this.submitTarget.disabled = false
    }
  }
}
