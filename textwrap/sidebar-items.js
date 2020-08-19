initSidebarItems({"fn":[["dedent","Removes common leading whitespace from each line."],["fill","Fill a line of text at `width` characters."],["indent","Add prefix to each non-empty line."],["wrap","Wrap a line of text at `width` characters."],["wrap_iter","Lazily wrap a line of text at `width` characters."]],"struct":[["HyphenSplitter","Simple and default way to split words: splitting on existing hyphens only."],["IntoWrapIter","An iterator over the lines of the input string which owns a `Wrapper`. An instance of `IntoWrapIter` is typically obtained through either [`wrap_iter`] or [`Wrapper::into_wrap_iter`]."],["NoHyphenation","Use this as a [`Wrapper.splitter`] to avoid any kind of hyphenation:"],["WrapIter","An iterator over the lines of the input string which borrows a `Wrapper`. An instance of `WrapIter` is typically obtained through the [`Wrapper::wrap_iter`] method."],["Wrapper","A Wrapper holds settings for wrapping and filling text. Use it when the convenience [`wrap_iter`], [`wrap`] and [`fill`] functions are not flexible enough."]],"trait":[["WordSplitter","An interface for splitting words."]]});