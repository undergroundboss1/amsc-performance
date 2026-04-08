/**
 * Input validation and sanitization utilities.
 * Used by API routes to validate client-submitted data before storing.
 *
 * SECURITY: All user input MUST pass through these validators
 * before being written to the database.
 */

/**
 * Sanitize a string — trim whitespace, remove HTML tags.
 */
export function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/<[^>]*>/g, '');
}

/**
 * Validate email format.
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 simplified — good enough for real-world use
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim()) && email.length <= 254;
}

/**
 * Validate phone number — allows international formats.
 * Accepts: +254712345678, 0712345678, +1-555-123-4567
 */
export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-().]/g, '');
  const re = /^\+?[0-9]{7,15}$/;
  return re.test(cleaned);
}

/**
 * Validate a full name — at least 2 characters, no numbers.
 */
export function isValidName(name) {
  if (!name || typeof name !== 'string') return false;
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 100 && !/[0-9]/.test(trimmed);
}

/**
 * Validate the registration form data.
 * Returns { valid: boolean, errors: string[] }
 */
export function validateRegistration(data) {
  const errors = [];

  if (!isValidName(data.fullName)) {
    errors.push('Please enter a valid full name (at least 2 characters, no numbers).');
  }
  if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address.');
  }
  if (!isValidPhone(data.phone)) {
    errors.push('Please enter a valid phone number.');
  }
  if (!data.planId || typeof data.planId !== 'string') {
    errors.push('Please select a training plan.');
  }

  // Required application fields
  if (!data.sport || typeof data.sport !== 'string' || data.sport.trim().length < 2) {
    errors.push('Please enter your sport or discipline.');
  }
  if (!data.goals || typeof data.goals !== 'string' || data.goals.trim().length < 5) {
    errors.push('Please tell us about your training goals.');
  }
  if (!data.availability || typeof data.availability !== 'string' || data.availability.trim().length < 3) {
    errors.push('Please enter your training availability.');
  }

  // Length limits
  if (data.sport && data.sport.length > 100) {
    errors.push('Sport/discipline must be under 100 characters.');
  }
  if (data.goals && data.goals.length > 500) {
    errors.push('Training goals must be under 500 characters.');
  }
  if (data.availability && data.availability.length > 300) {
    errors.push('Availability details must be under 300 characters.');
  }
  if (data.healthInfo && data.healthInfo.length > 500) {
    errors.push('Health information must be under 500 characters.');
  }
  if (data.experience && data.experience.length > 500) {
    errors.push('Training experience must be under 500 characters.');
  }
  if (data.referralSource && data.referralSource.length > 200) {
    errors.push('Referral source must be under 200 characters.');
  }

  return { valid: errors.length === 0, errors };
}
