import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IMenu } from '../../interfaces/commons.interface';
import { PathMenu } from '../../enums/commons.enum';
import { RouterLink } from '@angular/router';

const MENUS: IMenu[] = [
  {
    name: 'Giới thiệu',
    path: PathMenu.GioiThieu,
  },
  {
    name: 'Liên hệ',
    path: PathMenu.LienHe,
  },
  {
    name: 'Góp ý',
    path: PathMenu.GopY,
  },
  {
    name: 'Hỏi đáp',
    path: PathMenu.HoiDap,
  },
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  appName: string = 'FPT Polytechnic';
  menus: IMenu[] = MENUS;
  setupAccount: string[] = [
    'Đăng ký',
    'Đăng nhập',
    'Quên mật khẩu',
    'Đăng xuất',
    'Đổi mật khẩu',
    'Cập nhật tài khoản',
  ];
}
