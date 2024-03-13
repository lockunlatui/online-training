import { Component } from '@angular/core';
import { IDanhMuc } from '../../interfaces/commons.interface';
import { NgFor } from '@angular/common';
import { MOCK_DANH_MUC } from '../../mocks/commons.mock';

@Component({
  selector: 'app-danh-muc',
  standalone: true,
  imports: [NgFor],
  templateUrl: './danh-muc.component.html',
  styleUrl: './danh-muc.component.scss',
})
export class DanhMucComponent {
  danhMucMonHoc: IDanhMuc[] = MOCK_DANH_MUC;
}
