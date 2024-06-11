declare module '@hookform/resolvers/yup' {
  import { Resolver } from 'react-hook-form';
  import * as yup from 'yup';

  export function yupResolver<T extends yup.AnyObjectSchema>(
    schema: T,
    options?: {
      abortEarly?: boolean;
      recursive?: boolean;
      context?: any;
    },
  ): Resolver<yup.Asserts<T>, any>;
}
