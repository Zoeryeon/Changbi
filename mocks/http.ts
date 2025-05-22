// mocks /http.ts
import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { booksHandlers } from '@/mocks/books-handlers';
import { newsHandlers } from '@/mocks/news-handlers';
import { authorsHandlers } from '@/mocks/authors-handler';
import { searchHandlers } from '@/mocks/search-handlers';
import { communityHandlers } from '@/mocks/community-handler';
import { aboutHandlers } from '@/mocks/about-handlers';
import { libraryHandlers } from '@/mocks/library-handler';

const app = express();
const port = 9090; // 다른 곳에서 사용하지 않을만한 주소로 충돌 막아줌!

app.use(
  cors({
    origin: 'http://localhost:3000', // 클라이언트 주소
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(
  createMiddleware(
    ...booksHandlers,
    ...newsHandlers,
    ...authorsHandlers,
    ...searchHandlers,
    ...communityHandlers,
    ...aboutHandlers,
    ...libraryHandlers
  )
); // MSW 핸들러 연결

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
