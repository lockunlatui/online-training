import { Component } from '@angular/core';
import { IDanhMuc } from '../../interfaces/commons.interface';
import { MOCK_DANH_MUC } from '../../mocks/commons.mock';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trang-chu',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './trang-chu.component.html',
  styleUrl: './trang-chu.component.scss',
})
export class TrangChuComponent {
  danhMucMonHoc: IDanhMuc[] = MOCK_DANH_MUC;
}
