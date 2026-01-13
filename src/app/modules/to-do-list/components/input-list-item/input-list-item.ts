import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IListItems } from '../../interface/IListItems';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [CommonModule, DatePipe], 
  templateUrl: './input-list-item.html',
  styleUrl: './input-list-item.scss',
})
export class InputListItem {
  @Input({ required: true }) public inputListItems: IListItems[] = [];

  @Output() public outputUpdateItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();

  public updateItemCheckbox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckbox.emit({ id, checked });
  }

  @Output() public outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();

  public updateItemText(id: string, value: string) {
    return this.outputUpdateItemText.emit({ id, value });
  }

  @Output() public outputDeleteItem = new EventEmitter<string>();

  public deleteItem(id: string) {
    return this.outputDeleteItem.emit(id);
  }
}
