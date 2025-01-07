import { HttpInterceptorFn } from '@angular/common/http';
import { DomainName } from './PathTools';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('eShopAngular');
  const myRequest = req.clone({
    url: DomainName + req.url,
    headers: req.headers.append('Authorization', 'Bearer ' + token),
  });

  return next(myRequest);
};
