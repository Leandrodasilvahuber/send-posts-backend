export default interface IPostsRepository {
    delete(post: any):void
    save(post:any):void
    findByUserId (post: any):Promise<any>
    findByIdAndUserId (post: any):Promise<any>
}
