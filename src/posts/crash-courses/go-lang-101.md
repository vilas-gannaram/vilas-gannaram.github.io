---
  title: 'GO (GOlang)'
  date: '2025-08-20'
  category: 'GO'
  tags: ['GO', 'Golang', 'crash-course']
---

Go is a _fast, statically typed, compiled language_. created by **Google**

- **Fast**:
  1. Since it is compiled to native machine code, no VM or Runtime headaches.
  2. You can choose how much memory you want to use for your numbers (integers/floats):
     - `8bits`, `16bits`, `32bits`, `64bits`
     - e.g: `int8`, `uint16`, `float32`
- **Statically typed**: types are assigned when variables are declared, and you can't change the type once declared.
- **Compiled**: You can compile code to machine code, [see example below](#how-to-compile), [read docs](https://go.dev/doc/tutorial/compile-install)

Offers a bit of everything: Popular for Cloud, microservices, APIs, and CLI tools.
Fun fact: the tools like Docker, Kubernetes, and more were written in **GO**

## Installation & Setup

### Installing GOlang

I use Ubuntu 24 Desktop as my system, so this works for Linux, [See Official docs](https://go.dev/doc/install)

1. Run the following command, which installs or replaces **GO** in `/usr/local/go`

   ```bash
     rm -rf /usr/local/go && tar -C /usr/local -xzf go1.24.6.linux-amd64.tar.gz
   ```

2. add this line at the end of `~/.zshrc` or `~/.profile`

   ```bash
   export PATH=$PATH:/usr/local/go/bin
   ```

3. And now reload/restart the terminal and then run

   ```bash
       go version
   ```

   > **Output**: go version go1.24.6 linux/amd64

### Setup

I use **[Visual Studio Code (vscode)](https://code.visualstudio.com/download)** as my code editor.

**Google** also provoides a **[vscode extension for GO](https://marketplace.visualstudio.com/items?itemName=golang.go)**, once you install it, It will prompt you to install some developer tools, If you miss that you use below command.

```bash
  #!/usr/bin/env bash

  # Exit immediately if a command exits with a non-zero status
  set -e

  echo "🚀 Installing Go developer tools..."

    # gopls: Go language server (used by VSCode, GoLand, etc.)
  go install golang.org/x/tools/gopls@latest

  # staticcheck: Advanced linter for Go (catches bugs & style issues)
  go install honnef.co/go/tools/cmd/staticcheck@latest

  # goimports: Format code and manage imports (like gofmt + import fixing)
  go install golang.org/x/tools/cmd/goimports@latest

  # impl: Generate method stubs for implementing interfaces
  go install github.com/josharian/impl@latest

  # dlv: Delve debugger for Go
  go install github.com/go-delve/delve/cmd/dlv@latest

  # gotests: Generate unit test templates for Go code
  go install github.com/cweill/gotests/gotests@latest

  # goplay: Run Go snippets in the Go Playground
  go install github.com/haya14busa/goplay/cmd/goplay@latest

  echo "✅ All tools installed successfully!"
```

And my vscode config for **GO**

```json
{
	"[go]": {
		"editor.defaultFormatter": "golang.go" // use the official Go extension
	},
	"go.useLanguageServer": true,
	"go.formatTool": "goimports", // or "gofumpt" if you prefer stricter style
	"go.lintTool": "staticcheck",
	"gopls": {
		"formatting.gofumpt": true,
		// "formatting.imports": true,

		// Nice extras
		"ui.completion.usePlaceholders": true,
		"staticcheck": true,
		"analyses": {
			"unusedparams": true,
			"shadow": true,
			"nilness": true
		}
		// "ui.diagnostic.staticcheck": true
	}
}
```

## My First Go file:

Create a `main.go` file with the contents below. Just logging _Hello, World!_ to the terminal

```go main.go
  package main

  import "fmt"

  func main() {
    fmt.Println("Hello, World!")
  }
```

### How to run

To run this file: use

```bash
  go run main.go
```

### How to compile

To compile the file, use

```bash
  # gives a executable file named `main`
  go build main.go

  # run the executable file
  ./main bash
```

Either way we should be seeing _**Hello, World!**_ in the terminal

## Variable Declaration - (Strings & Numbers)

Different ways to declare variables in **GO**:

```go main.go
  package main

  var email string

  // explicit type
  var age uint8 = 25

  // type inferred
  var userName = "John Doe"

  func main() {
    // short-hand (only works inside a function.)
    city := "Hyderabad"
  }
```

### Default or Zero values

| Data Type                                                       | zero/default value |
| --------------------------------------------------------------- | ------------------ |
| Numbers (`Int`, `float64`)                                      | `0`, `0.0`         |
| String                                                          | `""`               |
| Boolean                                                         | `false`            |
| Reference Types(e.g. `pointers`, `slices`, `maps`, `functions`) | `nil`              |

In the example, we used `uint8` as the type for the `age` variable, so we're only allowed to use numbers _**0 through 255**_, [read more about number types](https://go.dev/ref/spec#Numeric_types)

## Printing & Formatting

We will be using [`fmt` package](https://pkg.go.dev/fmt), which is a [standard package](https://pkg.go.dev/std)

> _Standard Package_: we don't need to install it, but it is shipped with **GOlang**

The base template code:

```go
  package main

  import "fmt"

  var userName = "John Doe"

  var age = 20

  func main() {
    city := "Hyderabad"

    // we will be adding our code(print statements) here :)
  }
```

### Print - Just the basic print

`fmt.Print`: Just prints the output as is, it does not add spaces between operands or a newline `\n` at the end of print statement

```go
  fmt.Print(userName, "is from ")
  fmt.Print(city)
```

> **Output**: John Doeis from Hyderabad

### Println - Print newline

`fmt.Println`: adds space between operands, and also a newline char `\n` at the end of statement

```go
  fmt.Println(userName, "is from")
  fmt.Println(city)
```

> **Output**:
>
> ```
> John Doe is from
> Hyderabad
> ```

### Printf - Formatted strings

`fmt.Printf`: doesn't add the newline char at the end

```go
  fmt.Printf("%q is from %v and %d years old\n", userName, city, age)
```

> **Output**: "John Doe" is from Hyderabad and 20 years old

### Sprintf - Save formatted String

`fmt.Sprintf`: it won't print on terminal but returns the formatted string

- we do have `Sprint` == `Print`, and `Sprintln` == `Println`

```go
  output :=	fmt.Sprintf("%q is from %v and %d years old\n", userName, city, age)

  fmt.Println(output)
```

## Arrays & Slices

### Arrays

An `array` is a **fixed-size** ordered sequence of elements of the same data type, below is the example of explicit declarartion:

```go
  var fruits [2]string = [2]string{"apple", "banana"}
```

#### Example

Here is an example for Type Inferred, Short-Hand, with zero values for arrays. See how [zero-values](#default-or-zero-values) works.

```go
  package main

  import "fmt"

  var fruits = [2]string{}

  func main() {
    nums := [2]int{}

    fmt.Println("nums", nums)
    fmt.Println("fruits", fruits)

    // len(): Prints the length of the array
    fmt.Println("len(fruits)", len(fruits))
  }
```

> **Output**:
>
> ```
> nums [0 0]
> fruits [ ]
> len(fruits) 2
> ```

### Slices

A `slice` is also a ordered sequnce of elements of the same data type as `array`. but slice is dynamically sized

You can declare the slice similar to array, just don't add the size, resuing the same example for slice

```go
  package main

  import "fmt"

  var fruits = []string{}

  func main() {
    nums := []int{}

    fmt.Println("nums", nums)
    fmt.Println("fruits", fruits)
    fmt.Println("len(fruits)", len(fruits))
  }
```

> **Output**:
>
> ```
> nums []
> fruits []
> len(fruits) 0
> ```

### Functions/Methods

Will be using this variable for the following functions/methods

```go
  var fruits = []string{"apple", "orange", "banana"}
```

#### Accessing & updating an element (Array/Slice)

```go
  fruits[0] // gets the first item: apple

  fruits[1] = "grapes" // updating at inedx 1: orange -> grapes
```

#### Append (Slice)

```go
  fruits = append(fruits, "cherry")
```

> You can't append on Arrays but Slices

#### `sort` & `strings` (from the standard package)

##### sort
