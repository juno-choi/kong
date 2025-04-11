설치

sudo npm i -g @nestjs/cli

프로젝트 생성

nest new [project-name]

```
sudo nest new kong

npm install
npm run start:dev
```

main, app.module.ts 제외하고 모두 지우기

모듈 생성
```
nest g module [모듈 이름]
```

contoller 생성
```
nest g controller boards --no-spec
```
테스트 코드는 일단 스킵


servcie 생성

```
nest g service boards --no-spec
```

service를 사용ㅎ기 위해서는 @Injectable 데코를 붙여주고 module의 provider로 등록해주어야 한다.

model 생성

boards.model.ts 로 직접 생성

interface로 구조를 먼저 생성

```ts
export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}
```

```ts
export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
```
