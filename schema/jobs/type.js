export const jobType = ` 
type Job
  {
    jid : ID!
    tags :[String!]
    link : String
    email : String
    description :String
    experience : String!
    salary : String
    level : String!
    title:String!
    responsibility : String!
    start_date : String
    last_date : String
    types : String!
    requirements : String!
    location : String
    website:String!
    company:Company!
    cid :ID!
}
type Query
  {
    getAllJob:[Job]
    getJob(jid:ID!):Job
    getJobOfCompany(companyId:ID!):[Job]
    getNewJob:[Job]
    getAllBookMark:[Job]
    isBookmarked(jid:ID!):Boolean
    
  }
    input editJobType{
      cid :ID
      tags :[String!]
      link : String
      email : String
      experience : String
      salary : String
      level : String
      title:String
      responsibility : String
      start_date : String
      last_date : String
      types : String
      requirements : String
      location : String
      website:String
      description: String
    }
type Mutation
    {
      addJob(jobData:addJobType):Job
      editJob(jid:ID!,jobData:editJobType):Job
      deleteJob(jid:ID!):Job
      removeNewJob(jid:ID!):[Job]
      removeAllNewJob:String
      addBookmark(jid:ID!):Job
      removeBookmark(jid:ID!):[Job]
    removeAllBookmark:allBookmarkRemoveType!


    }
    type allBookmarkRemoveType{
    count:Int!
    }
input addJobType
    {
      cid :ID!
      description: String
      tags :[String!]
      link : String
      email : String
      experience : String!
     level : String!
    title:String!
    salary:String!
      responsibility : String!
      start_date : String
      last_date : String
      types : String!
      requirements : String!
      location : String
      website:String!
    }
`;
