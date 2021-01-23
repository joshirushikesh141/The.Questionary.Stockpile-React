import React from 'react';
import './Heading.css';
import './stylesheet.css';
import './navbar.css';
import CDACicon from './CDAC-icon.jpg';
import facebookicon from './facebook-icon.png';
import linkedinicon from './linkedin-icon.png';
import twittericon from './twitter-icon.png';



function WebTechnology()
{
{/*====================================================================================================*/}
  return (<div>
    <div className="row container-fluid">
      <div className="col-2 columnmodific">
          <ol>
                        <li><a href="#Q1">HTML</a></li>
                        <li><a href="#Q2">CSS</a></li>
                        <li><a href="#Q3">NODE JS</a></li>
              <hr/>
              <h5>Follow us on</h5>
            <a href="https://www.cdac.in/index.aspx?id=mumbai">
            <img alt="cdac-mumbai" src={CDACicon} width="10%" height="10%" style={{paddingLeft: '2%'}} />
            </a>
  
            <a href="https://www.facebook.com/cdacmumbai">
              <img alt="cdac-facebook" src={facebookicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>
              </a>
  
            <a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
              <img alt="cdac-linkedin" src={linkedinicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>
  
            <a href="https://twitter.com/cdacmumbai?lang=en">
              <img alt="cdac-twitter" src={twittericon.png} width="10%" height="10%" style={{paddingLeft: '2%'}} />
              </a>
          <hr/>
          </ol>
      </div>
    {/*====================================================================================================*/}	
          <div className="col-10" className="add">
          <div class= "container section">
					<p>
                        <h3>HTML</h3>
                        <hr/>
                        <h6>1) What is HTML?</h6>
HTML is short for HyperText Markup Language and is the language of the World Wide Web. It
is the standard text formatting language used for creating and displaying pages on the Web.
HTML documents are made up of two things: the content and the tags that format it for proper
display on pages.
<hr/><h6>2) What are tags?</h6>
Content is placed in between HTML tags in order to properly format it. It makes use of the less
than symbol (). A slash symbol is also used as a closing tag. For example:
[crayon-5f2d9a964512c217400387/]
<hr/><h6>3) Do all HTML tags come in a pair?</h6>
No, there are single HTML tags that do not need a closing tag. Examples are the
tag and
 tags.
 <hr/><h6>4) What are some of the common lists that can be used when designing a page?</h6>
You can insert any or a combination of the following list types:<br/>
- ordered list<br/>
- unordered list<br/>
- definition list<br/>
- menu list<br/>
- directory list<br/>
 
Each of this list types makes use of a different tag set to compose
<hr/><h6>5) How do you insert a comment in HTML?</h6>
Comments in HTML begins with “”. For example:<br/>
[crayon-5f2d9a9645132343004896/]
<hr/><h6>6) Do all character entities display properly on all systems?</h6>
No, there are some character entities that cannot be displayed when the operating system that
the browser is running on does not support the characters. When that happens, these
characters are displayed as boxes.
<hr/><h6>7) What is an image map?</h6>
Image map lets you link to many different web pages using a single image. You can define
shapes in images that you want to make part of an image mapping.
<hr/><h6>8 ) What is the advantage of collapsing white space?</h6>
White spaces are a blank sequence of space characters, which is treated as a single space
character in HTML. Because the browser collapses multiple spaces into a single space, you can
indent lines of text without worrying about multiple spaces. This enables you to organize the
HTML code into a much more readable format.
<hr/><h6>9) Can attribute values be set to anything or are there specific values that they accept?</h6>
Some attribute values can be set to only predefined values. Other attributes can accept any
numerical value that represents the number of pixels for a size.

<hr/><h6>10) How do you insert a copyright symbol on a browser page?</h6>
To insert the copyright symbol, you need to type © or & #169; in an HTML file.
<hr/><h6>11) How do you create links to sections within the same page?</h6>
Links can be created using the tag, with referencing through the use of the number (#) symbol.
For example, you can have one line as BACK TO TOP, which would result in the words “BACK
TO TOP” appearing on the webpage and links to a bookmark named topmost. You then create
a separate tag command like somewhere on the top of the same webpage so that the user will
be linked to that spot when he clicked on “BACK TO TOP”.
<hr/><h6>12) Is there any way to keep list elements straight in an HTML file?</h6>
By using indents, you can keep the list elements straight. If you indent each subnested list in
further than the parent list that contains it, you can at a glance determine the various lists and
the elements that it contains.
<hr/><h6>13) If you see a web address on a magazine, to which web page does it point?</h6>
Every web page on the web can have a separate web address. Most of these addresses are
relative to the top-most web page. The published web address that appears within magazines
typically points this top-most page. From this top level page, you can access all other pages
within the website.
<hr/><h6>14) What is the use of alternative text in image mapping?</h6>
When you use image maps, it can easily become confusing and difficult to determine which
hotspots correspond to which links. Using alternative text lets, you put a descriptive text on each
hotspot link.
<hr/><h6>15) Do older HTML files work on newer browsers?</h6>
Yes, older HTML files are compliant to the HTML standard. Most older files work on the newer
browsers, though some features may not work.
<hr/><h6>16) Does a hyperlink apply to text only?</h6>
No, hyperlinks can be used in the text as well as images. That means you can convert an image
into a link that will allow users to link to another page when clicked. Surround the image within
the … tag combinations.
<hr/><h6>17) If the user’s operating system does not support the needed character, how can the
symbol be represented?</h6>
In cases wherein their operating system does not support a particular character, it is still

possible to display that character by showing it as an image instead.
<hr/><h6>18) How do you change the number type in the middle of a list?</h6>
The
 tag includes two attributes – type and value. The type attribute can be used to change the
numbering type for any list item. The value attribute can change the number index.
<hr/><h6>19) What are style sheets?</h6>
Style sheets enable you to build consistent, transportable, and well-defined style templates.
These templates can be linked to several different web pages, making it easy to maintain and
change the look and feel of all the web pages within site.
<hr/><h6>20) State bullet types available in HTML.</h6>
With ordered lists, you can select to use some different list types including alphabetical and
Roman numerals. The type attribute for unordered lists can be set to disc, square, or circle.
<hr/><h6>21) How do you create multicolored text in a webpage?</h6>
To create text with different colors, use the … tags for every character that you want to apply
color. You can use this tag combination as many times as needed, surrounding a single
character or an entire word.
<hr/><h6>22) Why are there both numerical and named character entity values?</h6>
The numerical values are taken from the ASCII values for the various characters, but these can
be difficult to remember. Because of this, named character entity values were created to make it
easier for web page designers to use.
<hr/><h6>23) Write an HTML table tag sequence that outputs the following:
50 pcs 100 500
10 pcs 5 50</h6>
Answer:
[crayon-5f2d9a964513a593876276/]
<hr/><h6>24) What is the advantage of grouping several checkboxes together?</h6>
Although checkboxes don’t affect one another, grouping checkboxes together help to organize
them. Checkbox buttons can have their name and do not need to belong to a group. A single
web page can have many different groups of checkboxes.
<hr/><h6>25) What will happen if you overlap sets of tags?</h6>
If two sets of HTML tags are overlapped, only the first tag will be recognized. You will find this

problem when the text does not display properly on the browser screen.
<hr/><h6>26) What are applets?</h6>
Applets are small programs that can be embedded within web pages to perform some specific
functionality, such as computations, animations, and information processing. Applets are written
using the Java language.
<hr/><h6>27) What if there is no text between the tags or if a text was omitted by mistake? Will it
affect the display of the HTML file?</h6>
If there is no text between the tags, then there is nothing to format. Therefore no formatting will
appear. Some tags, especially tags without a closing tag like the
tag, do not require any text between them.
<hr/><h6>28) Is it possible to set specific colors for table borders?</h6>
You can specify a border color using style sheets, but the colors for a table that does not use
style sheets will be the same as the text color.
<hr/><h6>29) How do you create a link that will connect to another web page when clicked?</h6>
To create hyperlinks, or links that connect to another web page, use the href tag. The general
format for this is: text
Replace “site” with the actual page URL that is supposed to be linked to when the text is
clicked.
<hr/><h6>30) What other ways can be used to align images and wrap text?</h6>
Tables can be used to position text and images. Another useful way to wrap text around an
image is to use style sheets.
<hr/><h6>31) Can a single text link point to two different web pages?</h6>
No. The tag can accept only a single href attribute, and it can point to only a single web page.
<hr/><h6>32) What is the difference between the directory and menu lists and the unordered list?</h6>
The key difference is that the directory and menu lists do not include attributes for changing the
bullet style.
<hr/><h6>33) Can you change the color of bullets?</h6>
The bullet color is always the same as that of the first character in the list item. If you surround

the
 and the first character with a set of tags with the color attribute set, the bullet color, and the
first character will be a different color from the text.
<hr/><h6>34) What are the limits of the text field size?</h6>
The default size for a text field is around 13 characters. However, if you include the size
attribute, you can set the size value to be as low as 1. The maximum size value will be
determined by the browser width. If the size attribute is set to 0, the size will be set to the default
size of 13 characters.
					
				</p>
                </div>
                




                <div class= "container section">
					<p>
                        <a name="Q2"></a><h3>CSS</h3>
                        
                        <hr/> <h6>1. What is CSS ?</h6>
                        The full form of CSS is Cascading Style Sheets. It is a styling language which is simple enough
                        for HTML elements. It is popular in web designing, and its application is common in XHTML
                        also.
                        <hr/>  <h6>  2. What is the origin of CSS ?</h6>
                        Standard Generalized Markup Language marked the beginning of style sheets in 1980s.
                        <hr/> <h6>  3. What are the different variations of CSS ?</h6>
                        The variations for CSS are:<br/>
                        CSS 1<br/>
                        CSS 2<br/>
                        CSS 2.1<br/>
                        CSS 3<br/>
                        CSS 4
                        <hr/> <h6>  4. What are the limitations of CSS ?</h6>
                        Limitations are:<br/>
                         Ascending by selectors is not possible<br/>
                        Limitations of vertical control<br/>
                        No expressions<br/>
                        No column declaration<br/>
                        Pseudo-class not controlled by dynamic behavior<br/>
                        Rules, styles, targeting specific text not possible

                        <hr/> <h6>  5. What are the advantages of CSS ?</h6>
                        Advantages are:<br/>
                        Bandwidth<br/>
                        Site-wide consistency<br/>
                        Page reformatting<br/>
                        Accessibility<br/>
                        Content separated from presentation
                        <hr/>   <h6>   6. What are CSS frameworks?</h6>
                        It is a pre-planned libraries, which allows easier and more standards-compliant webpage styling,
                        using CSS language.
                        <hr/>  <h6>  7. How block elements can be centered with CSS1?</h6>
                        Block level elements can be centered by:<br/>
                        The margin-left and margin-right properties can be set to some explicit value:<br/>
                        [crayon-5f2d3ac4a1056148982623/]
                        In this case, the left and right margins will be each, five ems wide since they split up the ten ems
                        left over from (40em-30em). It was unnecessary for setting up an explicit width for the BODY
                        element; it was done here for simplicity.
                        <hr/>   <h6> 8. Who maintains the CSS specifications?</h6>
                        World Wide Web Consortium maintains the CSS specifications.
                        <hr/> <h6>   9. In how many ways can a CSS be integrated as a web page?</h6>
                        CSS can be integrated in three ways:<br/>
                        Inline: Style attribute can be used to have CSS applied HTML elements.<br/>
                        Embedded: The Head element can have a Style element within which the code can be<br/>
                        placed.<br/>
                        Linked/ Imported: CSS can be placed in an external file and linked via link element.
                        <hr/>   <h6> 10. What benefits and demerits do External Style Sheets have?</h6>
                        Benefits:<br/>
                        One file can be used to control multiple documents having different styles.
                        Multiple HTML elements can have many documents, which can have classes.

                        To group styles in composite situations, methods as selector and grouping are used.<br/>
                        Demerits:<br/>
                        Extra download is needed to import documents having style information.
                        To render the document, the external style sheet should be loaded.
                        Not practical for small style definitions.
                        <hr/>  <h6>   11. Discuss the merits and demerits of Embedded Style Sheets?</h6>
                        Merits of Embedded Style Sheets:<br/>
                        Multiple tag types can be created in a single document.<br/>
                        Styles, in complex situations, can be applied by using Selector and Grouping methods.<br/>
                        Extra download is unnecessary.<br/>
                        Demerits of Embedded Style Sheets:<br/>
                        Multiple documents cannot be controlled.
                        <hr/>   <h6>  12. What does CSS selector mean?</h6>
                        A string equivalent of HTML elements by which declarations or a set of it, is declared and is a
                        link that can be referred for linking HTML and Style sheet is CSS selector.
                        <hr/>  <h6>  13. Enlist the media types CSS allows?</h6>
                        The design and customization of documents are rendered by media. By applying media control
                        over the external style sheets, they can be retrieved and used by loading it from the network.
                        <hr/> <h6>  14. Differentiate logical tags from physical tags?</h6>
                        While physical tags are also referred to as presentational mark-up, logical tags are
                        useless for appearances.
                        Physical tags are newer versions while logical tags are old and concentrate on content.
                        <hr/>   <h6>  15. Differentiate Style Sheet concept from HTML?</h6>
                        While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover,
                        Ruleset : Selectors can be attached to other selectors to be identified by ruleset.
                         style sheets have better browser capabilities and formatting options.    
                         <hr/>
                         <h6>16. Describe ‘ruleset’?</h6>
                          It has two parts:<br/>

                        Selector, e.g. R and
                        declaration curlybracket text-indent: 11pt curlybracket
                        <hr/><h6>  17. Comment on the Case-sensitivity of CSS ?</h6>
                        Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc
                        is. Only when XML declarations along with XHTML DOCTYPE are being used on the page,
                        CSS is case -sensitive.
                        <hr/> <h6>   18. Define Declaration block?</h6>
                        A catalog of directions within braces consisting of property, colon and value is called declaration
                        block.<br/>
                        e.g.: [property 1: value 3]
                        <hr/> <h6>   19. Enlist the various fonts’ attributes?</h6>
                        They are:<br/>
                        Font-style<br/>
                        Font-variant<br/>
                        Font-weight<br/>
                        Font-size/line-height<br/>
                        Font-family<br/>
                        Caption<br/>
                        Icon
                        <hr/> <h6>  20. Why is it easy to insert a file by importing it?</h6>
                        Importing enables combining external sheets to be inserted in many sheets. Different files and
                        sheets can be used to have different functions. Syntax:<br/>
                        @import notation, used with tag.
                        <hr/> <h6>   21. What is the usage of Class selector?</h6>
                        Selectors that are unique to a specific style, are called CLASS selectors. Declaration of style
                        and association with HTML can be made through this. Syntax:<br/>
                        Classname<br/>
                        it can be A-Z, a-z or digits.<br/>
                        .top curlybracket font: 14em ;curlybracket, class selector<br/>
                         this class is associated with element

                         <hr/>   <h6>  22. Differentiate Class selector from ID selector?</h6>
                        While an overall block is given to class selector, ID selector prefers only a single element
                        differing from other elements. In other words, ID are uniques while classes are not. Its possible
                        that an element has both class and ID.
                        <hr/>   <h6>  23. Can more than one declaration be added in CSS?</h6>
                        Yes, it can be achieved by using a semicolon.
                        <hr/>  <h6>  24. What is Pseudo-elements ?</h6>
                        Pseudo-elements are used to add special effects to some selectors. CSS in used to apply
                        styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the
                        document, then there is a feature available in CSS known as pseudo-elements. It will allow
                        extra mark-up to the document without disturbing the actual document.
                        <hr/>  <h6>   25. How to overrule underlining Hyperlinks?</h6>
                        Control statements and external style sheets are used to overrule underlining Hyperlinks.
                       
                        <hr/>  <h6>  26. What happens if 100% width is used along with floats all across the page?</h6>
                        While making the float declaration, 1 pixel is added every time it is used in the form of the
                        border, and even more float is allowed thereafter.
                        <hr/> <h6>  27. Can default property value be restored through CSS? If yes, how?</h6>
                        In CSS, you cannot revert back to old values due to lack of default values. The property can be
                        re- declared to get the default property.
                        <hr/>  <h6>  28. Enlist the various Media types used?</h6>
                        Different media has different properties as they are case insensitive.
                        They are:<br/>
                        Aural – for sound synthesizers and speech<br/>
                        Print – gives a preview of the content when printed
                        Projection- projects the CSS on projectors.<br/>
                        Handheld- uses handheld devices.<br/>
                        Screen- computers and laptop screens.

                        <hr/>  <h6>  29. What is CSS Box Model and what are its elements?</h6>
                        This box defines design and layout of elements of CSS. The elements are:<br/>
                        Margin: the top most layer, the overall structure is shown<br/>
                        Border: the padding and content option with a border around it is shown. Background color
                        affects the border.<br/>
                        Padding: Space is shown. Background colour affects the border.<br/>
                        Content: Actual content is shown.
                        <hr/>  <h6>  30. What is contextual selector?</h6>
                        Selector used to select special occurrences of an element is called contextual selector. A space
                        separates the individual selectors. Only the last element of the pattern is addressed in this kind
                        of selector. For e.g.: TD P TEXT curlybracket color: blue curlybracket
                        <hr/>  <h6>  31. Compare RGB values with Hexadecimal color codes ?</h6>
                        A color can be specified in two ways:<br/>
                        A color is represented by 6 characters i.e. hexadecimal color coding. It is a combination
                        of numbers and letters and is preceded by #. e.g.: g curlybracket color: #00cjfi curlybracket<br/>
                        A color is represented by a mixture of red, green and blue. The value of a color can also
                        be specified. e.g.: rgb(r,g,b): In this type the values can be in between the integers 0 and
                        255. rgb(r%,g%,b%): red, green and blue percentage is shown.
                        <hr/>  <h6>   32. Define Image sprites with context to CSS ?</h6>
                        When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the
                        loading every image on a webpage consumes time, using image sprites lessens the time taken
                        and gives information quickly.
                        CSS coding:
                        [crayon-5f2d3ac4a1061258686686/]<br/>
                        In this case, only the part needed is used. The user can save substantial margin and time
                        through this.
                        <hr/>   <h6>   33. Compare Grouping and Nesting in CSS ?</h6>
                        Grouping: Selectors can be grouped having the same values of property and the code be
                        reduced.<br/>
                        E.g. :
                        [crayon-5f2d3ac4a1062779172901/]

                        It can be seen from the code that every element shares the same property. Rewriting can be
                        avoided by writing each selector separated by a comma.
                        Nesting: Specifying a selector within a selector is called nesting.
                        [crayon-5f2d3ac4a1063682785852/]
                        <hr/> <h6>  34. How can the dimension be defined of an element ?</h6>
                        Dimension properties can be defined by:<br/>
                        Height<br/>
                        Max-height<br/>
                        Max-width<br/>
                        Min-height<br/>
                        Min-width<br/>
                        Width
                        <hr/> <h6>   35. Define float property of CSS?</h6>
                        By float property, the image can be moved to the right or the left along with the text to be
                        wrapped around it. Elements before this property is applied do not change their properties.
                        <hr/><h6>  36. How does Z index function?</h6>
                        Overlapping may occur while using CSS for positioning HTML elements. Z index helps in
                        specifying the overlapping element. It is a number which can be positive or negative, the default
                        value being zero.
                        <hr/> <h6>  37. What is graceful degradation?</h6>
                        In case the component fails, it will continue to work properly in the presence of a graceful
                        degradation. The latest browser application is used when a webpage is designed. As it is not
                        available to everyone, there is a basic functionality, which enables its use to a wider audience.
                        In case the image is unavailable for viewing, text is shown with the alt tag.
                        <hr/> <h6> 38. What is progressive enhancement?</h6>
                        It’s an alternative to graceful degradation, which concentrates on the matter of the web. The
                        functionality is same, but it provides an extra edge to users having the latest bandwidth. It has
                        been into prominent use recently with mobile internet connections expanding their base.
                        <hr/>   <h6> 39. How can backward compatibility be designed in CSS?</h6>
                        HTML sheet methods is collaborated with CSS and used accordingly.

                        <hr/>  <h6>   40. How can the gap under the image be removed?</h6>
                        As images being inline elements are treated same as texts, so there is a gap left, which can be
                         removed by:<br/>
                        CSS
                        [crayon-5f2d3ac4a1065401161951/]
                        <hr/>   <h6>   41. Why is @import only at the top?</h6>
                        @import is preferred only at the top, to avoid any overriding rules. Generally, ranking order is
                        followed in most programming languages such as Java, Modula, etc. In C, the # is a prominent
                        example of a @import being at the top.
                        <hr/> <h6>  42. Which among the following is more precedent: CSS properties or HTML procedures?</h6>
                        CSS is more precedent over HTML procedures. Browsers, which do not have CSS support,
                        display HTML attributes.
                        <hr/> <h6>  43. What is Inline style?</h6>
                        The Inline style in a CSS is used to add up styling to individual HTML elements.
                        <hr/><h6>  44. How comments can be added in CSS?</h6>
                        The comments in CSS can be added with /* and */.
                        <hr/>    <h6>   45. Define Attribute Selector ?</h6>
                        It is defined by a set of elements, value and its parts.
                        <hr/>   <h6>   46. Define property?</h6>
                        A style, that helps in influencing CSS. E.g. FONT. They have corresponding values or
                        properties within them, like FONT has different style like bold, italic etc.
                        <hr/>   <h6>   47. What is Alternate Style Sheet?</h6>
                        Alternate Style Sheets allows the user to select the style in which the page is displayed using
                        the view rightarrow page style menu. Through Alternate Style Sheet, user can see a multiple version of
                        the page on their needs and preferences.
                        <hr/>   <h6>   48. Are quotes mandatory in URL’s?</h6>
                        Quotes are optional in URL’s, and it can be single or double.

                        <hr/>    <h6>  49. What is at-rule?</h6>
                        Rule, which is applicable in the entire sheet and not partly, is known as at-rule. It is preceded by
                        @ followed by A-Z, a-z or 0-9.
                        <hr/>   <h6>   50. How can CSS be cascaded to mix with user’s personal sheet?</h6>
                        Properties can be a set in recommended places and the document modified for CSS to mix with
                        user’s personal sheet.
							
				</p>
				</div>



                <div class= "container section">
					<p>
						<a name="Q3"></a><h3>NODE JS</h3>
                        <hr/>
                                    <h6> 1. What is NPM?</h6>
                NPM stands for Node Package Manager. It is used for command line environment
                applied to install and manage Node.js Packages and repositories.
                <hr/>   <h6>2. What is Closures?</h6>
                Closure is a first-class function which is defined within another scope that has
                access to all the variables within the outer scope. Global variables can be made
                private with closures.
                <hr/>   <h6>3. Explain Modules in Node.js</h6>
                Modules are simple or complex functionalities in JavaScript files which can be
                reused throughout the Node.js platform. Each module in Node.js can be placed in a
                .js file in a separate folder. Also, Node.js modules have their own context, so it
                cannot interfere with others.
                <hr/>   <h6>4. Explain V8 Engine</h6>
                V8 is an open source JavaScript engine. It was developed by Google and is now
                used in Google Chrome, Node.js Couchbase, and MongoDB. The engine compiles
                JavaScript to machine code before executing it, instead of most other techniques.
                The compiled code is further optimized dynamically at runtime, based on heuristics
                of the code's execution profile.
                <hr/>    <h6>5. Explain event loop in Node.js</h6>
                The event loop (Event Loop) is a mechanism that allows Node.js to perform
                non-blocking I / O operations (despite the fact that JavaScript is single-threaded) by
                uploading operations to the system kernel.
                <hr/>  <h6>6. Explain what is libuv in Node.js</h6>
                libuv in Node.js is a cross-platform I/O abstraction library, written in C. It suppors
                Windows IOCP, epoll(4), kqueue(2), and Solaris event ports.<br/>
                libUV library is used for the following:<br/>
                - cross-platform I / O operations, working with files, network<br/>
                - main Node.js event loop support
                <hr/>   <h6>7. Why Node is single threaded?</h6>
                As single thread operations run better than multi-threaded ones, it is done in order to
                improve Node.js general performance.
                <hr/>  <h6>8. What are event emitters in Node.js?</h6>
                Node.js objects trigger events to support asynchronous execution of core APIs used.
                Objects that emit events as called ‘event emitters’.
                <hr/> <h6>9. What is a cluster?</h6>
                Cluster is a process used to handle thread execution load while working with
                multi-core systems.
                <hr/>  <h6>10. Explain the difference between readFile and createReadStream in Node.js.</h6>
                readFile loads the whole file into the memory you selected, and
                fs.createReadStream reads the entire file in specified chunks of sizes. Using
                createReadStream, the client receives the data faster since it is sent in chunks
                while it’s being read. readFile though reads the whole file first before sending it to
                the client.
                <hr/>   <h6>11. Write the steps for setting up an Express.js application.</h6>
                In order to set Express.js up, a user has to follow these steps:<br/>
                1. Create a folder with the same name as the project is called.<br/>
                2. Add package.json file to the folder.<br/>
                3. Run “npm install” command to install all the libraries from package.json.<br/>
                4. Create a file named ‘server.js’.<br/>
                5. Create a “router” file inside the package consisting of a folder named index.js.<br/>
                6. To the package consisting of index.html file add “App” one.<br/>
                The installation of Express.js is done.
                <hr/>   <h6>12. Since Node is a single threaded process, how to make use of all CPUs?</h6>
                It’s possible to take advantage of all CPUs by using the cluster module. It contains a
                set of properties that help to create programs which use all the CPUs of multi-core
                systems.
                <hr/>   <h6>13. How can you use middleware in Express?</h6>
                Middleware in Express.js is a function that applies to the routing process, performing
                operations at some points. It’s widely used for editing request and response objects
                as well as terminating the request before it reaches the route handler code.
                In order to set a middleware up, you need to invoke app.use() for each new layer
                you’d like to add. Middleware in Express.js can be the same for all paths or used
                only for a specific path your server handles.
                <hr/>  <h6>14. Explain the difference between process nextTick() and setImmediate()?</h6>
                The main difference between nextTick() and setImmediate() processes is that
                setImmediate() queus its callbacks on the even loop and nextTick() does not. Thus,
                as nextTick() callbacks execute before the even loop, they run prior to
                setImmediate() ones.

                            
				</p>
            </div>
           </div>
    </div>
    {/*====================================================================================================*/}
              <footer>
                <div class="row footer">
                    <h6>Last Updated: Tuesday, January 12, 2021<br />
                      Centre for Development of Advanced Computing (C-DAC Mumbai)</h6>
                </div>
              </footer>
    </div>
        );
      }
    {/**====================================================================================================*/}
  
    export default WebTechnology;