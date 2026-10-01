# Newsletter Sign-up Form

A newsletter sign-up form with email validation and a success message.

**[Live demo](https://d1mamometr.github.io/newsletter-sign-up/)**

## Overview

Users can enter their email, get an inline error for invalid input,
and see a confirmation screen with the submitted address.
The error clears as soon as the user starts correcting the field.

## Built with

- Semantic HTML5, responsive images via `<picture>`
- CSS custom properties, Flexbox, mobile-first workflow
- Vanilla JavaScript

## Implementation notes

- Email is validated with a simple regular expression rather than
  the browser's built-in check, which accepts addresses like `a@b`.
  Full verification is left to the confirmation email.
- The error state is a single modifier on the form; CSS styles
  the input and message from it, so JS toggles one class.
- The two screens are switched with the `hidden` attribute,
  with a `[hidden] { display: none !important }` rule so layout
  styles can't override it.
- User input is inserted with `textContent`, never `innerHTML`.
