const template = /*html */`
    <div> 
        <h1> user 페이지 </h1>
        <div>props : {{id}}</div>
        <div>param : {{this.$route.params.id}}</div>
        <div>query : {{this.$route.query.username}}</div>
        <RouterView />
    </div>
`;

export default {
    template,
    props : {
        id: String
    }
}