import { Routes } from '@angular/router';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { GopYComponent } from './gop-y/gop-y.component';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component';
import { PathMenu } from '../enums/commons.enum';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { BaiTestComponent } from './bai-test/bai-test.component';

export const routes: Routes = [
  {
    path: PathMenu.TrangChu,
    component: TrangChuComponent,
  },
  {
    path: PathMenu.GioiThieu,
    component: GioiThieuComponent,
  },
  {
    path: PathMenu.LienHe,
    component: LienHeComponent,
  },
  {
    path: PathMenu.GopY,
    component: GopYComponent,
  },
  {
    path: PathMenu.HoiDap,
    component: HoiDapComponent,
  },
  {
    path: PathMenu.BaiTest,
    component: BaiTestComponent,
  },
];
