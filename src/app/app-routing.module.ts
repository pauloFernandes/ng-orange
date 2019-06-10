import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'observables',
    loadChildren: () => import('./contexts/observables/observables.module').then(mod => mod.ObservablesModule)
  },
  {
    path: 'tricky-games',
    loadChildren: () => import('./contexts/tricky-games/tricky-games.module').then(mod => mod.TrickyGamesModule)
  },

  {
    path: 'users',
    loadChildren: () => import('./contexts/users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: 'users/:userId/gitlab',
    loadChildren: () => import('./contexts/gitlab/gitlab.module').then(mod => mod.GitlabModule)
  },
  {
    path: 'users/:userId/toggl',
    loadChildren: () => import('./contexts/toggl/toggl.module').then(mod => mod.TogglModule)
  },
  {
    path: 'users/:userId/channels',
    loadChildren: () => import('./contexts/channels/channels.module').then(mod => mod.ChannelsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
