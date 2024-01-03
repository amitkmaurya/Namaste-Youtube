import React from "react";

const commentsData = [
  {
    name: "Amit Maurya",
    text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
    replies: [
      {
        name: "Amit Maurya",
        text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
        replies: [],
      },
      {
        name: "Amit Maurya",
        text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
        replies: [
          {
            name: "Amit Maurya",
            text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
            replies: [],
          },
          {
            name: "Amit Maurya",
            text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
            replies: [
              {
                name: "Amit Maurya",
                text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
                replies: [
                  {
                    name: "Amit Maurya",
                    text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
                    replies: [],
                  },
                  {
                    name: "Amit Maurya",
                    text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
                    replies: [],
                  },
                ],
              },
              {
                name: "Amit Maurya",
                text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Amit Maurya",
        text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
        replies: [],
      },
    ],
  },
  {
    name: "Amit Maurya",
    text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
    replies: [],
  },
  {
    name: "Amit Maurya",
    text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
    replies: [],
  },
  {
    name: "Amit Maurya",
    text: "kdfmkdnf fknekfnek fnekfne fknekfn fndfknd fndknfk",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-sm p-2 rounded-lg my-2">
      <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/709/709722.png" alt="" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div key={index} className="pl-5 ml-5 border border-l-black">
            <Comment data={comment} />
            <CommentsList comments={comment.replies} />
        </div>
    ))
}
const CommentsContainer = () => {
  return (
    <>
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
      </div>
      <CommentsList comments={commentsData} />
    </>
  );
};

export default CommentsContainer;
