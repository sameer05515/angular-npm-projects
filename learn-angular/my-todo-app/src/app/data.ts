import { Status, Todo } from "./Todo.dto.js";

const internalTodoDataArr = [
  Todo.fromData(
    `<b>Create My Todo list</b>

    - Successfully created basic structure of Todo.`,
    "25/Jan/2025",
    Status.CLOSED,
    "25/Jan/2025",
    true,
    true,
    true
  ),

  Todo.fromData(
    `<b>Identify all sources, where i have stored some data and collate them</b>.
         It could be a database, github-repo, a folder, or some sub-folder in a github repo    
          Possible sources are
            - 'my-pages' repo
            - other GitHub repo
            - A react archer project
            - unit testing repo
            - My mongodb collection 
            - My smart-bkp repo
            - My hard drive
            - My old note books, in which I have written my projects day to day description 
            - ChatGPT conversations 
            - Udemy course links
            - Tweet app db data 
            - Questions and answers collection from Adrik's interview 
            - One node js ejs project, where I have collected some data 
            - One typescript project also, where some data collected 
            - Also one another next js project where some data collected, etc
            - Prioritise , revise and practice swiftly and efficiently and regularly 

    <b>Note: </b> We have developed page, and will add identified sources accordingly. Now making this todo as Not urgent, so that we can focus on other priority to-dos.
    `,
    "25/Jan/2025",
    Status.OPEN,
    "",
    false,
    true,
    true
  ),

  Todo.fromData(
    `<b>Review topics in Topic-Mgmt application:</b>
        - Add appropriate tags
        `,
    "25/Jan/2025",
    Status.OPEN,
    "",
    true,
    true,
    true
  ),

  Todo.fromObject({
    name: `<b>Migrate Todo application logic to  TweetApp application:</b>
        - Migrated code from 'my-pages' repo to here.
        - <span class="badge text-bg-danger">Although it was neither urgent not important</span>
        `,
    createdDate: "25/Jan/2025",
    status: Status.CLOSED,
    isUrgent: false,
    isImportant: false,
    hasGroomed: true,
    closedOn: "26/Jan/2025",
  }),

  Todo.fromObject({
    name: `<b>Apply uniform layout and styles in all modules of TweetApp application:</b>
        - Add appropriate tags
        `,
    createdDate: "25/Jan/2025",
    status: Status.OPEN,
    isUrgent: false,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromData(
    `<b>Add a toggle button in this page:</b>
        - Toggle button should show "Show all"/"Show only open"/"show closed" text and display filtered data accordingly in list
        `,
    "25/Jan/2025",
    Status.CLOSED,
    "25/Jan/2025",
    true,
    true,
    true
  ),

  Todo.fromObject({
    name: `
[Urgent][Important][Aim: attract more interview calls]: Update my resume to reflect following too.
	- I have good knowledge of tailwind and bootstrap for web page designing
	- I have 14 years of fullstack development
	- I have worked as Developer, Senior Developer, Team Lead in my projects.
	- I have implemented several design patterns. (Also there will be one separate task to highlight my implemented design patterns with their use cases)
	
	This is to attract more interview calls
    `,
    createdDate: "26/Jan/2025",
    isUrgent: true,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not Urgent][Not Important] A try by removing zycus infotech company name and making last company as EVC ventures and gap of 2 years.
	- As an answer of what i did in this duration, i will mention that i have been working as freelancer and some part time job and explore chatgpt from last 2 years.
	- Expectation is , may be i may get a salary package of at least 20 -25 LPA package.
	
	- Closed, as per suggestions from ChatGPT. I will work on resume alterations by highlighling certifications, freelancing projects and personal growth during the gap.
	
	details can be found in below chat in tweets section.
	[TBD](./TBD)
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
    closedOn:"26/Jan/2025",
  }),

  Todo.fromObject({
    name: `
[Not urgent][Important] - Create a global node details viewer popup.
	- The popup should be placed in App.js or Routes Page.
	- It will be open on dispatch action similar to CustomBackdrop3
	- It will be useful to open details about a given node.
	- To make clarity, I should introduce one slug field in each of my node type. (or keep track of slug in a separate collection)
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[urgent][Not Important] - Move the static to-do data to database.
	- My expectation from To-do section is to be very simple, but effective.
	- In to-do, I just want to dump my ideas and sort them with urgency, created date, closed date 
	- Also I am planning to introduce an upcoming "action date", which will contain a future date, if some to-do is not actionable instantly
	
	- As the data grows, it will be difficult to manage it manually, hence making this task as urgent, but not important.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: true,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not urgent][Not Important]: [Beautification of To-do module]: Add below in circle as logo
 <div>Stay calm → Review → Prioritize → Revise → Practice → Retrospect → Stay Calm</div>

 <b>Closing Note:</b> <span class="badge text-bg-danger">Although it was neither urgent not important</span>, I implemented it with the help of ChatGPT
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: true,
    status:Status.CLOSED,
    closedOn: "27/Jan/2025",
  }),

  Todo.fromObject({
    name: `
[Not urgent][important]: [Beautification of To-do module]: Add smart editor to add/edit description of a Todo-Module

- This task is dependent on below to-dos and should be done post their implementation and successful testing
	- Create a modal containing smart editor, which can be open from any where in application, based on a query parameter "open-smart-editor=true"
		- Implementation of
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not urgent][Important]: Todos data should be visible to only user, who has created. It should be private and should not be visible in other modules. However, Todo can link any node (either topic, tweet, task, memory map or any future node)

Hence todo's visibility should be in controlled manner.

<span class="badge text-bg-danger">Dependency :</span> This Task can be implemented after implementation of authentication and authorization in TweetApp
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: true,
    hasGroomed: true,
  }),

  Todo.fromObject({
    name: `
[Not urgent][Important] : Do POC for below in backend layer in node-service project.
	- create a POST rest endpoint which accepts a an object implementing Node interface in its body. 
	- After recieving the object, typecast it into a suitable class according to node-type mentioned in incoming object.
	- Write observation or challenges faced, if any
	
Why this is important?
- We will use the findings to improvise the backend layer of TweetApp to reduce redundancy and simplify the save/update of a node.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not Urgent][Important] : Create a central modal to show all available tags. It will be used to select some tags, to be linked to any Node.
	- It should accept one initialState props (a string array, containing valid tags).
	- If pop-up finds some inconsistency in provided data, It should show error message and restrict user to further use the component for the purpose (i.e. if there is some issue, user should not be able to select/unselect tags)
	- Try to display only 5 tags at a time in the popup.
	- User should be able to filter tags, based on provided search text.
	- In later versions of this component, there should be a setting for count for number of tags displayed in paginated view.

Why this is important?
- This can reduce the complexity of various Node forms. Please see this [topic](TBD_topic_id] to get more informations about list of all currently supported Node-Types.

Why this is not urgent?
- Since we already have implemented the tagging/untagging in almost our all modules, we can take this To-do as an enhancement and can wait for its implementation post proper grooming done.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not urgent][Important]: Develop one route to display "About this project" information.
	- It should contain information about TweetApp project.
	- It should also contain informations about all supported modules and thought process why we design this particular module or data type.
	
Suggestions: 
	- Try to use existing memory-map module and topic mgmt module for purpose of this to-do.
		- use memory-map to design flow.
		- use topics created dedicately for showing this data.
		
	- Although, as primarily it looks difficult to implement, we can go with some traditional approach like as follows
		- In our other projects, like chat renderer etc, we have created md files in public folder and used a [MDSection](./stable-github-url-of-MDSection-component] component.
		- In some other projects and in Miscellaneous components section of this project itself, we have created json object containing a description string. 
			- caution- However, please refer this [topic](topic-unique-id-showing-challenges-by-going-through-this-approach)(or, a github file url, residing in "memory-maps" private repo of "premendrakumar") 
			- caution- Also, Since this todo is not urgent and as a learner, we should go through a challenging approach.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not urgent][Not Important]:[todo-not-groomed-yet] Create a topic or static md/html file, to mention user journey for following:
	- creating a Todo, 
	- changing its urgent or important flag with a reason
	- changing access of a todo (Note, initially all todos are private and we have not developed any facility/service/redux-selector to get list of todos, in our other modules). rather we have also not created services to persist todo's in table.
		- default - so that the todo become visible in other todos for linking.
		- protected - so that the todo is only visible within selected modules inside TweetApp application.
		- public - so that to-do visible in entire module and can be accessed from other applications or directly accessible in browser, as per authorization rule of TweetApp.

Why	this todo?	
- Although this todo is mostly a documentation work, this can be useful for future reference and could be useful for new user of TweetApp.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Urgent][Important]:[todo-not-groomed-yet] Decide authorization rules in TweetApp.

- Review , improvise the login/authorization rules of current TweetApp and Decide authorization rules in TweetApp.

What authorization rules we should implement?
- TBD

Why urgent and important?
- Although we have developed some login logic in TweetApp, this is in very early stage. We want to improve login and authorization modules now.
- As this TweetApp is <b>created for collate my learning</b> and in my interviews Spring security is very frequently asked sections (and honestly, I am not fully prepared for it due my other learning priorities), I want to brushup my knowledge to build an application with proper authentication and authorization.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: true,
    isImportant: true,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not Urgent][Not Important]: Just for readability purpose of a todo item, we can restrict the length of portion of description of tweet to, say 500 words or 50 lines.

Later we can move the setting in some common page or modal and connect it with redux.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: true,
  }),

  Todo.fromObject({
    name: `
[Not urgent][Important]:[todo-not-groomed-yet] by default at time of creation of a new To-do item, it should only take the description field value and default values for below field should go with todo data. 
	- <b>Note</>, in its initial implementation, Todo module data is being managed manually, which can be error-prone and in later we are planning to persist todo data in database, hence we have not highlighted some section and pre-requisites for this todo.
		- Also we are making this todo as "not groomed yet" due to same reason.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
[Not Urgent][Not Important]:[todo-not-groomed-yet] We want to develop functionality to create todos in bulk from given text.

Note: 
	- This feature is very handle-with-care type. And there could be several <b>corner cases</b>. Hence, this should be developed after regorous testing and most probably after developing feature for persisting todo items in database.
	- We should create a clear user journey to develop this feature. Below are few advises
		- Create one form with a text area.
		- Once user inputs some text and click on "Preview button", seggregate the text into multiple todo descriptions and render them in todo items.
		- there should be some logic to seggregate description. below are few examples
			- say, a separator text like "--------- todo description ends here----", or
			- a user given separator text, like "-------------"
			- In place of on text area accepting multiple descriptions as-a-whole and then seggregating them into multiple todos, we can go with 
				- "one-text-area---one-todo" approach too and give a checkbox in bottom of form having text "create another one, after creating this todo."
				- Alternatively, we can give a "Add more button" in bottom and on click of it another form can be open.
			- However, to avoid unneccesary complexity in initial development, we should go with simplest approach.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `
Sanitize all todo data, which created on 26/jan/2025. 

due to lack of time, we have just created them on raw notepad and placed in db (manual data-store currently) as-it-is. They need to be reviewed and groomed properly.
    `,
    createdDate: "26/Jan/2025",
    isUrgent: true,
    isImportant: true,
    hasGroomed: true,
  }),

  Todo.fromObject({
    name: `
Practice and revise Spring boot security with 
  - a html project , 
  - a react project, and 
  - a spring MVC project 
    `,
    createdDate: "26/Jan/2025",
    isUrgent: true,
    isImportant: true,
    hasGroomed: true,
  }),

  Todo.fromObject({
    name: `
    Create one TO-DO App with angular.

    Approach will be similar. we will use hardcoded json to populate todo data and will try to render UI with Angular.

    <b>Purpose: </b> Learning Angular by creating this app
    `,
    createdDate: "28/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: true,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),

  Todo.fromObject({
    name: `

    `,
    createdDate: "26/Jan/2025",
    isUrgent: false,
    isImportant: false,
    hasGroomed: false,
  }),
];

/**
 *
 * ===========  SANITIZATION AND EXPORT OF DATA. =========
 *
 *
 */

const sanitizeDataBeforeExport = (todosArr:Todo[]) => {
  return (
    todosArr
      /**
       * This filter is fix for removing all to-dos, which has name empty-trimmed string.
       *
       * Explaination of todo containing empty-trimmed string:
       *  - Since we are currently manually creating to-dos, so to save some time have put some extra `placeholder` tods, which we are filtering, in sanitization
       *
       * Logic is: if a todo is closed, then it will be treated as groomed, despite any value saved in database.
       * */
      .filter((d) => d.name && d.name.trim())
      .map((d) => ({
        ...d,
        /**
         * This is fix for all closed to-dos, which created before intoduction of `hasGroomed` in ToDo class.
         *
         * Logic is: if a todo is closed, then it will be treated as groomed, despite any value saved in database.
         * */
        hasGroomed: d.hasGroomed === true || d.status === Status.CLOSED,
      }))
  );
};

const myTodos = sanitizeDataBeforeExport(internalTodoDataArr);

export { myTodos };
