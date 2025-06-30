import { Repository } from 'typeorm';
import { FeedPostEntity } from './models/post.entity';
import { FeedPost } from './models/post.interface';
import { Observable } from 'rxjs';
export declare class FeedService {
    private readonly feedPostRepository;
    constructor(feedPostRepository: Repository<FeedPostEntity>);
    createPost(feedPost: FeedPost): Observable<FeedPost>;
}
