# Software Galaxies Documentation

[Software Galaxies](https://anvaka.github.io/pm/#/) visualizes dependencies among most popular package managers.
Every star in this visualization represents a package.

## What do I see here?

![Go packages](https://raw.githubusercontent.com/anvaka/pm/master/images/go_image.png)

Every dot here is a package. Position of a package is determined by
force based graph layout algorithm and usually clusters together packages
that depend on each other.

Some packages are connected by lines. It means one package depend on another.
Image above shows only very close connections. We can also see all connections,
but the image becomes obscure by amount of connections.

![Go packages with edges](https://raw.githubusercontent.com/anvaka/pm/master/images/go_image_all_links.png)

The size of the dots represents total number of dependents. The bigger the star - 
the more packages are using it.

## Navigating in the space

The primary focus of these visualizations is exploratory discovery. It works
best on large monitor, but also works on mobile devices. Use `one finger touch`
to fly forward, `two fingers touch` to fly backward. Rotate your device
to look around. Click on the image below to see a video demo:

If you are on the desktop, you can use `mouse wheel` to bring up keyboard map:

|    |    |    |   |
|---:|:---|---:|---|
| `W`  | Move forward  | `Up` |Rotate up|
| `S`  | Move backward  | `Down`  |Rotate down |
| `A`  | Move left  |`Left`|Rotate left|
| `D`  | Move right  |`Right` | Rotate right|
| `Q`  | Roll right  |`R` | Fly up|
| `E`  | Roll left  |`F` | Fly down|
| `L`  | Toggle links  | `Space` | Toggle steering |
| `Shift`  | Fly faster  |  |  |

With this keyboard navigation you can fly far far away.

# Searching

Search box can be used to locate a start in the graph. The input box accepts
regular expression: If you type `.` it will match all names, and show all results.

Unfortunately for larger graphs (with more than 1,000,000 nodes) this may result
in terrible performance and should be improved in the future.


# Found a bug? Have a suggestion? Feature Requests?

I need your help very much! Please, [open a new issue](https://github.com/anvaka/pm/issues/new)
if you have a suggestion, feature request or found a bug.

I wish you joyful exploration, Commander!
