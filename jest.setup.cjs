// Provide TextEncoder/TextDecoder for packages that expect them (node < 11 may not have globally)
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Any other global setup for testing library can go here
