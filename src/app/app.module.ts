import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogPostComponent } from './homepage/blog-post/blog-post.component';
import { BlogPostScreenComponent } from './blog-post-screen/blog-post-screen.component';
import { ForumComponent } from './forum/forum.component';
import { ForumPostComponent } from './forum/forum-post/forum-post.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ForumPostScreenComponent } from './forum-post-screen/forum-post-screen.component';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddForumPostComponent } from './add-forum-post/add-forum-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    FooterComponent,
    MyProfileComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    BlogPostComponent,
    BlogPostScreenComponent,
    ForumComponent,
    ForumPostComponent,
    BlankLayoutComponent,
    MainLayoutComponent,
    ForumPostScreenComponent,
    SavedPostsComponent,
    AddPostComponent,
    AddForumPostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
