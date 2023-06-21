import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogPostComponent } from './homepage/blog-post/blog-post.component';
import { BlogPostScreenComponent } from './blog-post-screen/blog-post-screen.component';
import { ForumPostComponent } from './forum/forum-post/forum-post.component';
import { ForumComponent } from './forum/forum.component';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { ForumPostScreenComponent } from './forum-post-screen/forum-post-screen.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddForumPostComponent } from './add-forum-post/add-forum-post.component';

const routes: Routes = [
  
  {path: 'navbar', component: NavbarComponent },
  {path: 'aboutUs', component: AboutUsComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'myProfile', component: MyProfileComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent },
  {path: 'homepage', component: HomepageComponent },
  {path: 'blogPost', component: BlogPostComponent },
  {path: 'blogPostScreen', component: BlogPostScreenComponent },
  {path: 'forumPost', component: ForumPostComponent },
  {path: 'forum', component: ForumComponent },
  {path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'saved-posts', component: SavedPostsComponent},
  {path: 'forum-post-screen', component:ForumPostScreenComponent},
  {path: 'blog-post-screen', component:BlogPostScreenComponent},
  {path:'add-post', component:AddPostComponent},
  {path: 'add-forum-post', component:AddForumPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
