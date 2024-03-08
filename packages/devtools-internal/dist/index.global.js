"use client"
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/get-trace.ts
  var import_error_stack_parser = __toESM(__require("error-stack-parser"));

  // src/clean-stack.ts
  var unrelatedFunctionName = "renderWithHooks";
  var cleanStack = (stack) => {
    const firstUnrelatedIndex = stack.findIndex(
      (frame) => frame.functionName === unrelatedFunctionName
    );
    if (firstUnrelatedIndex !== -1) {
      return stack.slice(0, firstUnrelatedIndex);
    }
    return stack;
  };

  // src/constants.ts
  var REFINE_PACKAGE_FILEPATH_REGEXP = process.env.NODE_ENV !== "development" ? /node_modules\/refinedev\/(?<name>.*?)\// : /\/refine\/packages\/(?<name>.*?)\//;

  // src/is-refine-stack.ts
  var isRefineStack = (filename) => {
    if (!filename)
      return false;
    const match = filename.match(REFINE_PACKAGE_FILEPATH_REGEXP);
    return !!match;
  };

  // src/get-package-name-from-filename.ts
  var getPackageNameFromFilename = (filename) => {
    var _a;
    if (!filename)
      return;
    const match = filename.match(REFINE_PACKAGE_FILEPATH_REGEXP);
    const name = (_a = match == null ? void 0 : match.groups) == null ? void 0 : _a.name;
    if (!name)
      return;
    return `@refinedev/${name}`;
  };

  // src/get-trace.ts
  function getTrace() {
    if (process.env.NODE_ENV !== "development") {
      return [];
    }
    try {
      const error = new Error();
      const stack = import_error_stack_parser.default.parse(error);
      const clean = cleanStack(stack);
      const traces = clean.map(
        (frame) => ({
          file: frame.fileName,
          line: frame.lineNumber,
          column: frame.columnNumber,
          function: frame.functionName,
          isRefine: isRefineStack(frame.fileName),
          packageName: getPackageNameFromFilename(frame.fileName)
        })
      ).filter((trace) => trace.function);
      return traces.slice(1);
    } catch (error) {
      return [];
    }
  }

  // src/get-resource-path.ts
  var import_devtools_shared = __require("@refinedev/devtools-shared");
  var getResourcePath = (hookName, legacyKey) => {
    if (import_devtools_shared.scopes[hookName] === "auth") {
      return null;
    }
    if (hookName === "useCan") {
      if (legacyKey) {
        return "key[1].resource";
      }
      return "key[1]";
    }
    if (import_devtools_shared.scopes[hookName] === "audit-log") {
      if (hookName === "useLog") {
        return "variables.resource";
      }
      return "key[1]";
    }
    if (import_devtools_shared.scopes[hookName] === "data") {
      if (hookName === "useCustom" || hookName === "useCustomMutation") {
        return null;
      }
      switch (hookName) {
        case "useList":
        case "useInfiniteList":
        case "useOne":
        case "useMany":
          if (legacyKey) {
            return "key[1]";
          }
          return "key[2]";
        case "useCreate":
        case "useCreateMany":
        case "useDelete":
        case "useDeleteMany":
        case "useUpdate":
        case "useUpdateMany":
          return "variables.resource";
      }
    }
    return null;
  };

  // src/get-xray.ts
  function getXRay(hookName, legacyKey) {
    if (process.env.NODE_ENV !== "development") {
      return {
        hookName: "",
        trace: [],
        resourcePath: null,
        legacyKey: false
      };
    }
    const trace = getTrace().slice(1);
    const resourcePath = getResourcePath(hookName, legacyKey);
    return {
      hookName,
      trace,
      resourcePath,
      legacyKey
    };
  }

  // src/use-query-subscription.tsx
  var import_devtools_shared3 = __require("@refinedev/devtools-shared");
  var import_react = __toESM(__require("react"));

  // src/listeners.ts
  var import_devtools_shared2 = __require("@refinedev/devtools-shared");

  // src/create-identifier.ts
  var createIdentifier = (key, trace) => {
    const simpleTrace = trace == null ? void 0 : trace.map(
      (t) => `${t.file}:${t.line}:${t.column}#${t.function}-${t.packageName}-${t.isRefine ? 1 : 0}`
    );
    const str = JSON.stringify([...key ?? [], ...simpleTrace ?? []]);
    return str;
  };

  // src/listeners.ts
  var createMutationListener = (ws) => (mutation) => {
    var _a;
    if (!((_a = mutation == null ? void 0 : mutation.meta) == null ? void 0 : _a.trace))
      return;
    const meta = mutation == null ? void 0 : mutation.meta;
    new Promise((resolve) => {
      var _a2, _b;
      (0, import_devtools_shared2.send)(ws, import_devtools_shared2.DevtoolsEvent.ACTIVITY, {
        type: "mutation",
        identifier: createIdentifier(
          mutation == null ? void 0 : mutation.options.mutationKey,
          (_a2 = mutation == null ? void 0 : mutation.meta) == null ? void 0 : _a2.trace
        ),
        key: mutation == null ? void 0 : mutation.options.mutationKey,
        status: mutation == null ? void 0 : mutation.state.status,
        state: mutation == null ? void 0 : mutation.state,
        variables: (_b = mutation == null ? void 0 : mutation.state) == null ? void 0 : _b.variables,
        ...meta
      });
      resolve();
    });
  };
  var createQueryListener = (ws) => (query) => {
    var _a;
    if (!((_a = query == null ? void 0 : query.meta) == null ? void 0 : _a.trace))
      return;
    const meta = query == null ? void 0 : query.meta;
    new Promise((resolve) => {
      var _a2;
      (0, import_devtools_shared2.send)(ws, import_devtools_shared2.DevtoolsEvent.ACTIVITY, {
        type: "query",
        identifier: createIdentifier(query.queryKey, (_a2 = query.meta) == null ? void 0 : _a2.trace),
        key: query.queryKey,
        status: query.state.status,
        state: query.state,
        ...meta
      });
      resolve();
    });
  };

  // src/use-query-subscription.tsx
  var useQuerySubscription = process.env.NODE_ENV !== "development" ? () => ({}) : (queryClient) => {
    const { ws } = (0, import_react.useContext)(import_devtools_shared3.DevToolsContext);
    const queryCacheSubscription = import_react.default.useRef();
    const mutationCacheSubscription = import_react.default.useRef();
    import_react.default.useEffect(() => {
      if (!ws)
        return () => 0;
      const queryCache = queryClient.getQueryCache();
      const queryListener = createQueryListener(ws);
      queryCache.getAll().forEach(queryListener);
      queryCacheSubscription.current = queryCache.subscribe(
        ({ query, type }) => (type === "added" || type === "updated") && queryListener(query)
      );
      return () => {
        var _a;
        (_a = queryCacheSubscription.current) == null ? void 0 : _a.call(queryCacheSubscription);
      };
    }, [ws, queryClient]);
    import_react.default.useEffect(() => {
      if (!ws)
        return () => 0;
      const mutationCache = queryClient.getMutationCache();
      const mutationListener = createMutationListener(ws);
      mutationCache.getAll().forEach(mutationListener);
      mutationCacheSubscription.current = mutationCache.subscribe(
        ({ mutation, type }) => (type === "added" || type === "updated") && mutationListener(mutation)
      );
      return () => {
        var _a;
        (_a = mutationCacheSubscription.current) == null ? void 0 : _a.call(mutationCacheSubscription);
      };
    }, [ws, queryClient]);
    return {};
  };
})();
//# sourceMappingURL=index.global.js.map