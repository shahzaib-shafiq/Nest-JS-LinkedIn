import { FeedPost } from './models/post.interface';
import { FeedService } from '../feed/feed.service';
import { Observable } from 'rxjs';
export declare class FeedController {
    private feedService;
    constructor(feedService: FeedService);
    create(post: FeedPost): Observable<FeedPost>;
}
