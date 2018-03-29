/* global document before describe it */
import { mapTemplates, toggleTemplate } from '../src/assets/drizzle/scripts/form-state-changer';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('mapTemplates ', () => {
  const templates = [];
  before(() => {
    templates[0] = document.createElement('div');
    templates[0].setAttribute('data-template-id', 'test1');
    templates[1] = document.createElement('div');
    templates[1].setAttribute('data-template-id', 'test1-error-state');
    templates[2] = document.createElement('div');
    templates[2].setAttribute('data-template-id', 'test1-disabled-state');
    templates[3] = document.createElement('div');
    templates[3].setAttribute('data-template-id', 'test2');
    templates[4] = document.createElement('div');
    templates[4].setAttribute('data-template-id', 'test2-error-state');
    templates[5] = document.createElement('div');
    templates[5].setAttribute('data-template-id', 'test2-disabled-state');
  });

  it('should only return templates that match the id given', () => {
    let containsMismatches = false;
    const mappedTemplates = mapTemplates('test1', templates);
    mappedTemplates.forEach((template) => {
      if (template.getAttribute('data-template-id').indexOf('test2') !== -1) {
        containsMismatches = true;
      }
    });
    expect(containsMismatches).eql(false);
  });
});

describe('toggleTemplate', () => {
  const templates = [];
  before(() => {
    templates[0] = document.createElement('div');
    templates[0].setAttribute('data-template-id', 'test1');
    templates[0].classList.add('hidden');
    templates[1] = document.createElement('div');
    templates[1].setAttribute('data-template-id', 'test1-error-state');
    templates[1].classList.add('hidden');
    templates[2] = document.createElement('div');
    templates[2].setAttribute('data-template-id', 'test1-disabled-state');
    templates[2].classList.add('hidden');
  });

  it('should remove .hidden from the matching template', () => {
    toggleTemplate('test1', 'normal', templates);
    expect(templates[0].classList.contains('hidden')).eql(false);
    expect(templates[1].classList.contains('hidden')).eql(true);
    expect(templates[1].classList.contains('hidden')).eql(true);
  });
});
