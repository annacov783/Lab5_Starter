// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('is 112-345-6789 valid', () => {
  expect(isPhoneNumber('112-345-6789')).toBe(true);
});

test('is 345-6789 valid', () => {
  expect(isPhoneNumber('345-6789')).toBe(true);
});

test('is 1123456789 is false', () => {
  expect(isPhoneNumber('1123456789')).toBe(false);
});

test('is 1123-45-6789 is false', () => {
  expect(isPhoneNumber('1123-45-6789')).toBe(false);
});

test('is johnsmith@email.com valid', () => {
  expect(isEmail('johnsmith@email.com')).toBe(true);
});

test('is janesmith@mail.io valid', () => {
  expect(isEmail('janesmith@mail.io')).toBe(true);
});

test('is janesmith@mail is false', () => {
  expect(isEmail('janesmith@mail')).toBe(false);
});

test('is janesmith.io is false', () => {
  expect(isEmail('janesmith.io')).toBe(false);
});

test('is abcdEFGH123 valid', () => {
  expect(isStrongPassword('abcdEFGH123')).toBe(true);
});

test('is ijklMNOP_123 valid', () => {
  expect(isStrongPassword('ijklMNOP_123')).toBe(true);
});

test('is ab false', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('is abcdEFGH1.2.3.4.5.6.7.8! false', () => {
  expect(isStrongPassword('abcdEFGH1.2.3.4.5.6.7.8!')).toBe(false);
});

test('is 5/5/2025 valid', () => {
  expect(isDate('5/5/2025')).toBe(true);
});

test('is 5/4/2025 valid', () => {
  expect(isDate('5/4/2025')).toBe(true);
});

test('is 5/5/25 false', () => {
  expect(isDate('5/5/25')).toBe(false);
});

test('is 5/5 false', () => {
  expect(isDate('5/5')).toBe(false);
});

test('is abc valid', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('is abcdef valid', () => {
  expect(isHexColor('abcdef')).toBe(true);
});

test('is a false', () => {
  expect(isHexColor('ab')).toBe(false);
});

test('is abcd false', () => {
  expect(isHexColor('abcd')).toBe(false);
});
// TODO - Part 2
