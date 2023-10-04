# @c8y/ng-openapi-lib

This library provides set of models and services granting access to automatically generated API that is based on Open Api 3.0 specification.

## Generating API

By default, API is generated automatically by github actions workflow, each day, if there are any changes in Open Api specification file.
It is possible to generate api files manually by running command `node pipeline-tool.js build-api`
Api source can be changed by providing url as argument. To skip equality check, provide `-f --force` flag.


## Usage in project

run `npm i c8y-ng-openapi-library --save` to install latest version of API library.

Then import `ApiModule` inside main application module:

```typescript
import { CoreModule, BootstrapComponent } from '@c8y/ngx-components';
import { NgModule } from '@angular/core';
import { ApiModule } from 'ngx-c8y-openapi-library';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    ApiModule.forRoot({ rootUrl: 'http://localhost:9000' }),
  ],
  declarations: [],
  bootstrap: [BootstrapComponent],

})
export class AppModule {}
```

Then inside Any service or component inject one of generated services:

```typescript
@Component({
  selector: 'c8y-users-component',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [CoreModule]
})
@Injectable()
export class UsersComponent implements OnInit {
 public users$: Observable<UserCollection>;
  
  constructor(
    public breadcrumbService: BreadcrumbService,
    public userService: UsersService
  ) { }

  async ngOnInit() {
    this.users$ = this.userService.getUserCollectionResource({
      tenantId: 't56293'
    });
  }
}
```

## CSRF token
Currently, it is impossible to fire request by this library if CSRF protection is enabled.

----
These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
