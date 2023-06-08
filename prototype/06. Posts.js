function solution() {
  class Post {
    constructor(title, content) {
      // TODO -> verify that class will not be instanciated
      //   if (new.target === Post) {
      //     throw new Error("THis is an abstract class and cannot be instanciated");
      //   }

      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}` + "\n" + `Content: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      if (this.comments.length > 0) {
        let output =
          super.toString() +
          "\n" +
          `Rating: ${this.likes - this.dislikes}` +
          "\n";

        output += "Comments:";
        for (const comment of this.comments) {
          output += "\n" + ` * ${comment}`;
        }

        return output;
      }

      return super.toString() + "\n" + `Rating: ${this.likes - this.dislikes}`;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this._views = Number(views);
    }

    get views() {
      return this._views;
    }

    view() {
      this._views++;
      return this;
    }

    toString() {
      return super.toString() + "\n" + `Views: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}

const classes = solution();
// const post = new classes.Post("Post", "Content");
// console.log(post.toString());
// Post: Post
// Content: Content

const scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!
console.log("------------");
const bp = new classes.BlogPost("Blog", "Post Content", 12);
console.log(bp.toString());

class Person {
  constructor(name) {
    this.name = name;
  }
}

class AbstractPerson {
  constructor(name) {
    if (new.target === AbstractPerson) {
      throw new Error("This is an abstract class and cannot be instanciated");
    }

    this.name = name;
  }
}

const ivanPerson = new Person("Ivan");
// const ivanAbstractPerson = new AbstractPerson("Ivan");
