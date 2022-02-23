# Living Organism Taxonomy

This repository uses ngraph.three to display a galaxy-like view of half a million organisms linked as per their Taxonomy definition.

## local development

```bash
git clone https://github.com/hirako2000/ngraph-taxonomy
cd ngraph-taxonomy
npm install
npm run start
```

on a separate terminal tab:

```bash
cd static-server
http-server --cors -p 9090
```

This will start local development sever with auto-rebuild.

## Generating the Taxonomy graph binaries and metadata (Local db)

Local DB

### Data source and processing
- The src data is a mysql dump of a large species data set with taxonomy information.
- The db is converted into CSV for parsing with a node script.
- The node script generates ngraph binaries with 250 iterations.

### Generate

```bash
node genNature.js # this will take a couple of mins to parse the data, 
# then takes a good half an hour for graph iterations
```

## Generating the Taxonomy graph binaries and metadata (Remote calls)

Remote calls. Good luck with the frequent random ECONNRESET. Use local approach preferably.

### Data source and processing
- The src data is a remote server API containing a large species data set with taxonomy information.
- The relevant pieces are fetched with dynamic parsing with a node script.
- The node script generates ngraph binaries with 250 iterations.

### Generate

```bash
node genNature.js # this will take a couple of mins to parse the data, 
# then takes a good half an hour for graph iterations
```

# Your own graphs

If your graph is smaller than 10k nodes, consider using [ngraph.pixel](https://github.com/anvaka/ngraph.pixel)
or [VivaGraph](https://github.com/anvaka/VivaGraphJS) both should
be able to provide interactive layout.

### Graph

First, you will need a graph in [ngraph.graph](https://github.com/anvaka/ngraph.graph)
format. The `ngraph.graph` has detailed documentation about how to create graph,
but it also has several loaders from popular graph formats (e.g. [dot](https://github.com/anvaka/ngraph.fromdot), [gexf](https://github.com/anvaka/ngraph.gexf))

### Layout

Now that you have a graph we need to compute the layout.

If your graph is > 10K nodes and  <= 1M nodes,  using [ngraph.offline.layout](https://github.com/anvaka/ngraph.offline.layout) is more adequate. The Taxonomy uses this type of layout.

If your graph is larger than 1M nodes, then consider using
[ngraph.native](https://github.com/anvaka/ngraph.native) - this module
is harder to work with (as it requires C++ knowledge), but it is much
faster.

### Data format

Once layout is computed, we are ready to visualize. Just save the graph using
[ngraph.tobinary](https://github.com/anvaka/ngraph.tobinary#ngraphtobinary)
and store it along with latest positions file (produced by layout) into a folder.

The folder structure should look like this:

```
.
└── static-server  /*  A separate static server to feed data */
    └── my-graph
        ├── manifest.json
        └── version-1
            ├── labels.json         /* this file is produced by ngraph.tobinary */
            ├── links.bin           /* this file is produced by ngraph.tobinary */
            └── positions.bin       /* this file is produced by ngraph.native   */
```

The file `manifest.json` describes what version of the graph are available and has the following
content:

``` json
{
  "all": ["version-1"],
  "last": "version-1"
}
```

Inside `static-server` we launch a web server. One can use a simple nodejs [http-server](https://www.npmjs.com/package/http-server). Once it is installed globally (`npm i http-server -g`), you can launch it like this:

```bash
http-server --cors -p 9090
```

This will start a local data server at `http://127.0.0.1:9090/`

Update the [config.js](https://github.com/hirako2000/ngraph-taxonomy/master/src/config.js) in
this repository to point to your data server, and your graph should be accessible at

http://127.0.0.1:8081/#/galaxy/my-graph


# The cyber threat visualization

This is a far simpler graph, which I'm experimenting with to develop a threat actor Tactics, Techniques, and Procedures (TTP) navigation.

## Generate graph

```bash
node genThreatsGraph.js
```