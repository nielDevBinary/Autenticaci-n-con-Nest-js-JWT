import { Request } from 'express';
import { User } from '../../db/schema.js';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

type RequesWithUser = Request & { user: User };

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequesWithUser>();
    return request.user;
  },
);
