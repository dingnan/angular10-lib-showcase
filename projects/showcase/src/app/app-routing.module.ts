import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { HomePageComponent } from './modules/home/page/home.page/home.page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'alert',
    loadChildren: () =>
      import('./modules/lib-demo/lib-demo.module').then((m) => m.LibDemoModule),
  },
  {
    path: 'flex',
    loadChildren: () =>
      import('./modules/flex-demo/flex-demo.module').then(
        (m) => m.FlexDemoModule,
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((m) => m.TodoModule),
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
