# Yet Another Interpreted Programming Language (yaipl)
This is just a little project of mine to do since im bored and have nothing else to do on my school semester break.

## Documentation
The following has statements already implemented and are ready to use (more coming soon):

### def
The def statement is used to define a variable. The syntax is as follows:
```
def <variable_name> <type> <value>
```
Types can be str, int, or bool.
Variable names cant contain any symbols.
To make a constant add an exclamation mark (!) before your variable:
```
def !constant str "cant change me!"
```
To make an array of type add an asterisk (*) before your type:
```
def array *str
```
To define array items use the __list__ statement (not implemented yet)