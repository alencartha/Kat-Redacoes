import { publicar } from './index.js';
import * as services from '../../services/index.js';

services.createPost = jest.fn(() => Promise.resolve(true));
services.handleSignOut = jest.fn(() => Promise.resolve(true));

describe('Publicar', () => {
  it('should be a function', () => {
    expect(typeof publicar).toBe('function');
  });

  it('click on the send post button', () => {
    publicar().querySelector('#postar').dispatchEvent(new Event('click'));
    expect(services.createPost).toHaveBeenCalled();
  });

  it('click on the sign out button', () => {
    publicar().querySelector('#exit').dispatchEvent(new Event('click'));
    expect(services.handleSignOut).toHaveBeenCalled();
  });
});
