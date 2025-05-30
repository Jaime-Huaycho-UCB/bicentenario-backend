import { Reflector } from '@nestjs/core';

export const Rols = Reflector.createDecorator<string[]>();