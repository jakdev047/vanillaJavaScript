/* 
    Structure:  / regularExpression / modifier

    Modifier:
        i => Case Insensitive
        g => Global Search
        m => Multiple line matching
    Brackets: 
        a.  [abc]  =>  any match a || b || c
        b.  [^abc]  =>  without any match a || b || c
        c.  [a-z]  =>   any match a to z
        d.  [0-9]  =>   any match 0 to 9
        e.  [^a-z]  =>   without any match a to z
        f.  [^0-9]  =>   without any match 0 to 9
        g.  [ab|bc]  =>  any match ab || bc

    Metacharacter:  mText.match(/K\b/g);
        a.  / . / => match any character without new line
        b.  / \w  / => match word ( a-z or 0-9 or _  ) character
        c.  / \W  / => without word ( a-z or 0-9 or _  ) character
        d.  / \d  / => match digit word ( 0-9  ) character
        e.  / \D  / => without  digit word ( 0-9 ) character
        f.  / \s  / => match white space ( space, tab, enter, new line  ) character
        g.  / \S  / => without white space ( space, tab, enter, new line  ) character
        h.  / \bA  / => to match a character at the beginning or end of a word
        i.  / \B  / =>  without to match a character at the beginning or end of a word
        j.  / \0  / =>  match null character
        k.  / \n  / => match new line
    
    Quantifiers: qText.match(/a+/g);
        a.  / abc+ / 
                => matches a string that has ab followed by one or more c
                => ab abc abcc babc ( 3 matches )
                =>    1   2     3

        b.  / abc* / 
                =>  matches a string that has ab followed by zero or more c 
                => ab abc abcc babc ( 4 matches )
                => 1  2    3     4

        c.  / abc? / 
                => matches a string that has ab followed by zero or one c
                => ab abc abcc babc ( 4 matches )
                => 1  2   3     4

        d.  / abc$ / 
                => matches end side
                => ab abc abcc babc ( 1 matches )
                =>               1
        e.  / ^abc / 
                => matches start side
                => abc abc abcc babc ( 1 matches )
                =>  1
        f.  / abc{2} / 
                =>  matches a string that has ab followed by 2 c
                => abc abc abcc babc ( 1 matches )
                =>          1


    Using the Test Method
    Using the match method
    Match Anything with Wildcard Period /./
    Match Single Character with Multiple Possibilities /[aiou]/
    vowel check /[aeiou]/gi
    Match Letters of the Alphabet /[a-z]/
    Match Characters that Occur One or More Times /a+/ig

    Find Characters with Lazy Matching 
    /<.*?>/  for '<h1>Hello</h1>'
    /t[a-z]*i/  for 'titanic' output ['titani']
    /t[a-z]*?i/ for 'titanic' output ['ti']

    Match All Letters and Numbers /[A-Za-z0-9_]+/ or  /\w+/
    Match All Numbers [0-9] or /\d/
    Match All Non-Numbers [^0-9] or /\D/

    Restrict Possible Usernames

    dateTime test

    notBinary test

    matches one or more digit characters test

    Grouping subexpressions test

    Match Whitespace \s
    Match Return \r
    Match Tab \t
    Match from \f
    match New Line \n

    Check for All or None

    Positive and Negative Lookahead
    Positive and Negative LookBehind

    Reuse Patterns Using Capture Groups (\d+\1)

    Use Capture Groups to Search and Replace

    Remove Whitespace from Start and End

    Remove empty lines of a text document in JavaScript


*/

// Using the Test Method
let myString = "Hello, World! Reguler Expression";
let myRegex = /Hello/;
myRegex.test(myString); // true

/Hello|Reguler Expression/.test(myString); // true (double string check)

// Extract Matches
myString.match(/Hello/i); // output: ['Hello',index: 0, input: myString]

// Find More Than the First Match;
"Repeat, Repeat, Repeat".match(/Repeat/); // ['Repeat',index: 0, input: myString]
"Repeat, Repeat, Repeat".match(/Repeat/g); // ['Repeat','Repeat','Repeat']

/*
    Match Anything with Wildcard Period /./
    if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

*/

/* 
    you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
*/
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
quoteSample.match(vowelRegex); // ['e','a',...,'i']

/*
    Match Characters that Occur One or More Times
    /s+/ig
*/

/* 
    Find Characters with Lazy Matching
    /t[a-z]*i/  for 'titanic' output ['titani']
    /t[a-z]*?i/ for 'titanic' output ['ti']
    /<.*?>/  for '<h1>Hello</h1>'
*/

/* 
    let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
    console.log(dateTime.test("01-30-2003 15:20")); => true
    console.log(dateTime.test("30-jan-2003 15:20")); => false
*/

/*
    let notBinary = /[^01]/;
    console.log(notBinary.test("1100100010100110")); => false
    console.log(notBinary.test("1100100010200110")); => true
*/

/*
    When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. 

    Thus, /\d+/ matches one or more digit characters.

    console.log(/'\d+'/.test("'123'"));  => true
    console.log(/'\d+'/.test("''"));   => false

    Thus, / \d* / matches zero or more digit characters.

    console.log(/'\d*'/.test("'123'")); => true
    console.log(/'\d*'/.test("''"));  => true

    A question mark makes a part of a pattern optional, 
    meaning it may occur zero times or one time.

    console.log(/\d?/.test("")); => true
    console.log(/\d?/.test("1")); => true

    {4} => 4 times
    {2,4} => the element must occur at least twice and at most four times.

    let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
    console.log(dateTime.test("1-30-2003 8:45")); => true
    
    
*/

/*
    Grouping subexpressions

    let cartoonCrying = /boo+(hoo+)+/i;
    console.log(cartoonCrying.test("Boohoooohoohooo")); => 
    
    The first and second + characters apply only to the second o in boo and hoo, respectively. The third + applies to the whole group (hoo+), matching one or more sequences like that.
*/

/* 
    Restrict Possible Usernames

    Usernames can only use alpha-numeric characters.  [a-zA-Z0-9_]+

    The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
    solve: 
        ^[0-9]* means "any digit, at the start of the string"; 
        [^0-9]* means "anything except a digit"

    Username letters can be lowercase and uppercase. /regex/ig

    Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

    1st solution
    
    /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

    ^: start of input
    [a-z]: first character is a letter
    [a-z]+: following characters are letters  one or more
    \d*: input ends with 0 or more digits
    $: Matches the end of the line

    | - or

    ^[a-z]: first character is a letter
    \d\d+: following characters are 2 or more digits
    $: end of input

    2nd solution

    /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

    ^: start of input
    [a-z]: first character is a letter
    [0-9]{2,0}: ends with two or more numbers
    |: or
    [a-z]+: has one or more letters next
    \d*: and ends with zero or more numbers
    $: end of input
    i: ignore case of input
    

*/

let username = "AB1";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);

console.log(userCheck.test(username));

/*
    Check for All or None
    let american = "color";
    let british = "colour";
    let rainbowRegex= /colou?r/;
    rainbowRegex.test(american); // true
    rainbowRegex.test(british); // true

*/

/*
    Positive and Negative Lookahead ?= positive  ?! negative

    A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

    On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

    simple password checker that looks for between 3 and 6 characters and at least one number:
    let password = "abc123";
    let checkPass = /(?=\w{3,6})(?=\D*\d)/;
    checkPass.test(password);

    Example:
        // look ahed
        BDT 1500 is the total
        /.*(?=is the total)/

        // lok behind or look after
        The total is BDT 1500
        /(?<=The total is)*./

    Example
        Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

        greater than 5 characters long => (?=\w{6})
        have two consecutive digits => (?=\w*\d{2})

        let sampleWord = "astronaut";
        let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
        let result = pwRegex.test(sampleWord);


*/

/*
    Reuse Patterns Using Capture Groups

    Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

    /^(\d+)\s\1\s\1$/;

    ^: start of input
    $: end of input

    let repeatNum = "42 42 42 42";
    let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
    let result = repeatNum.match(reRegex);
    console.log(result);

*/

/*
    Use Capture Groups to Search and Replace
    .replace()

    let wrongText = "The sky is silver.";
    let silverRegex = /silver/;
    wrongText.replace(silverRegex, "blue");

    "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');  // Camp Code
*/

/*
    Remove Whitespace from Start and End

    Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

    let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g; // Change this line
    let result = hello.replace(wsRegex,''); 
*/

// console.log(result);

/*  
    Remove empty lines of a text document in JavaScript
        split(/\r\n/) =>  ['Red Green Blue']

*/

const removeEmptyLines = (str) => {
  return str.split(/\r\n/).filter(line => line.trim() !== '').join('');
};

console.log(removeEmptyLines(`

    Red   

    Green  


    Blue`)
);
