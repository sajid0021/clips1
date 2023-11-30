import { Component, AfterContentInit,QueryList, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit{

  @ContentChildren(TabComponent)tabs:QueryList<TabComponent>=new QueryList()
constructor(){}
ngAfterContentInit(): void {
 const activetabs=this.tabs?.filter(
tab=>tab.active
 )
 if (!activetabs || activetabs.length === 0){
  this.selecttab(this.tabs!.first)

 }
}
selecttab(tab: TabComponent){
  this.tabs?.forEach(tab=>{
    tab.active=false
  })
  tab.active=true
  return false
}

}
