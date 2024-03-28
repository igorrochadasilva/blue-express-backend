import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const RequestId = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().body.requestId;
  },
);
