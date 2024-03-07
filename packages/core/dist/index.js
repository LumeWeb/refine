"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AccessControlContext: () => AccessControlContext,
  AuthPage: () => AuthPage,
  Authenticated: () => Authenticated,
  AutoSaveIndicator: () => AutoSaveIndicator,
  CanAccess: () => CanAccess,
  ErrorComponent: () => ErrorComponent,
  GitHubBanner: () => GitHubBanner,
  KeyBuilder: () => KeyBuilder,
  LayoutWrapper: () => LayoutWrapper,
  LoginPage: () => LoginPage,
  ReadyPage: () => ReadyPage,
  Refine: () => Refine,
  ResourceContext: () => ResourceContext,
  RouteChangeHandler: () => RouteChangeHandler,
  TranslationContext: () => TranslationContext,
  UndoableQueue: () => UndoableQueue,
  WelcomePage: () => WelcomePage,
  createTreeView: () => createTreeView,
  file2Base64: () => file2Base64,
  flattenObjectKeys: () => flattenObjectKeys,
  generateDefaultDocumentTitle: () => generateDefaultDocumentTitle,
  getDefaultFilter: () => getDefaultFilter,
  getDefaultSortOrder: () => getDefaultSortOrder,
  getNextPageParam: () => getNextPageParam,
  getPreviousPageParam: () => getPreviousPageParam,
  handleUseParams: () => handleUseParams,
  importCSVMapper: () => importCSVMapper,
  keys: () => keys,
  legacyResourceTransform: () => legacyResourceTransform,
  matchResourceFromRoute: () => matchResourceFromRoute,
  parseTableParams: () => parseTableParams,
  parseTableParamsFromQuery: () => parseTableParamsFromQuery,
  pickDataProvider: () => pickDataProvider,
  pickNotDeprecated: () => pickNotDeprecated,
  propertyPathToArray: () => propertyPathToArray,
  queryKeys: () => queryKeys,
  routeGenerator: () => routeGenerator,
  setInitialFilters: () => setInitialFilters,
  setInitialSorters: () => setInitialSorters,
  stringifyTableParams: () => stringifyTableParams,
  unionFilters: () => unionFilters,
  unionSorters: () => unionSorters,
  useActiveAuthProvider: () => useActiveAuthProvider,
  useApiUrl: () => useApiUrl,
  useAuthenticated: () => useAuthenticated,
  useBack: () => useBack,
  useBreadcrumb: () => useBreadcrumb,
  useCan: () => useCan,
  useCanWithoutCache: () => useCanWithoutCache,
  useCancelNotification: () => useCancelNotification,
  useCheckError: () => useCheckError,
  useCreate: () => useCreate,
  useCreateMany: () => useCreateMany,
  useCustom: () => useCustom,
  useCustomMutation: () => useCustomMutation,
  useDataProvider: () => useDataProvider,
  useDelete: () => useDelete,
  useDeleteMany: () => useDeleteMany,
  useExport: () => useExport,
  useForgotPassword: () => useForgotPassword,
  useForm: () => useForm,
  useGetIdentity: () => useGetIdentity,
  useGetLocale: () => useGetLocale,
  useGetToPath: () => useGetToPath,
  useGo: () => useGo,
  useHandleNotification: () => useHandleNotification,
  useImport: () => useImport,
  useInfiniteList: () => useInfiniteList,
  useInvalidate: () => useInvalidate,
  useIsAuthenticated: () => useIsAuthenticated,
  useIsExistAuthentication: () => useIsExistAuthentication,
  useLink: () => useLink,
  useList: () => useList,
  useLiveMode: () => useLiveMode,
  useLoadingOvertime: () => useLoadingOvertime,
  useLog: () => useLog,
  useLogList: () => useLogList,
  useLogin: () => useLogin,
  useLogout: () => useLogout,
  useMany: () => useMany,
  useMenu: () => useMenu,
  useMeta: () => useMeta,
  useModal: () => useModal,
  useMutationMode: () => useMutationMode,
  useNavigation: () => useNavigation,
  useNotification: () => useNotification,
  useOnError: () => useOnError,
  useOne: () => useOne,
  useParse: () => useParse,
  useParsed: () => useParsed,
  usePermissions: () => usePermissions,
  usePublish: () => usePublish,
  useRedirectionAfterSubmission: () => useRedirectionAfterSubmission,
  useRefineContext: () => useRefineContext,
  useRegister: () => useRegister,
  useResource: () => useResource,
  useResourceSubscription: () => useResourceSubscription,
  useResourceWithRoute: () => useResourceWithRoute,
  useRouterContext: () => useRouterContext,
  useRouterType: () => useRouterType,
  useSelect: () => useSelect,
  useSetLocale: () => useSetLocale,
  useShow: () => useShow,
  useSubscription: () => useSubscription,
  useSyncWithLocation: () => useSyncWithLocation,
  useTable: () => useTable,
  useTitle: () => useTitle,
  useToPath: () => useToPath,
  useTranslate: () => useTranslate,
  useUpdate: () => useUpdate,
  useUpdateMany: () => useUpdateMany,
  useUpdatePassword: () => useUpdatePassword,
  useUserFriendlyName: () => useUserFriendlyName,
  useWarnAboutChange: () => useWarnAboutChange,
  userFriendlyResourceName: () => userFriendlyResourceName
});
module.exports = __toCommonJS(src_exports);

// src/components/pages/error/index.tsx
var import_react62 = __toESM(require("react"));

// src/hooks/auth/usePermissions/index.ts
var import_react_query = require("@tanstack/react-query");
var import_devtools_internal = require("@refinedev/devtools-internal");

// src/definitions/table/index.ts
var import_qs = __toESM(require("qs"));
var import_unionWith = __toESM(require("lodash/unionWith"));
var import_differenceWith = __toESM(require("lodash/differenceWith"));
var import_warn_once = __toESM(require("warn-once"));

// src/definitions/helpers/userFriendlySeconds/index.ts
var userFriendlySecond = /* @__PURE__ */ __name((miliseconds) => {
  return miliseconds / 1e3;
}, "userFriendlySecond");

// src/definitions/helpers/importCSVMapper/index.ts
var import_zip = __toESM(require("lodash/zip"));
var import_fromPairs = __toESM(require("lodash/fromPairs"));
var importCSVMapper = /* @__PURE__ */ __name((data, mapData = (item) => item) => {
  const [headers, ...body] = data;
  return body.map((entry) => (0, import_fromPairs.default)((0, import_zip.default)(headers, entry))).map(
    (item, index, array) => mapData.call(void 0, item, index, array)
  );
}, "importCSVMapper");

// src/definitions/helpers/userFriendlyResourceName/index.ts
var import_pluralize = __toESM(require("pluralize"));
var userFriendlyResourceName = /* @__PURE__ */ __name((resource = "", type) => {
  const humanizeResource = humanizeString(resource);
  if (type === "singular") {
    return import_pluralize.default.singular(humanizeResource);
  }
  return import_pluralize.default.plural(humanizeResource);
}, "userFriendlyResourceName");

// src/definitions/helpers/handleUseParams/index.tsx
var handleUseParams = /* @__PURE__ */ __name((params = {}) => {
  if (params == null ? void 0 : params.id) {
    return {
      ...params,
      id: decodeURIComponent(params.id)
    };
  }
  return params;
}, "handleUseParams");

// src/definitions/helpers/pickNotDeprecated/index.ts
var pickNotDeprecated = /* @__PURE__ */ __name((...args) => {
  return args.find((arg) => typeof arg !== "undefined");
}, "pickNotDeprecated");

// src/definitions/helpers/keys/index.ts
function arrayFindIndex(array, slice) {
  return array.findIndex(
    (item, index) => index <= array.length - slice.length && slice.every(
      (sliceItem, sliceIndex) => array[index + sliceIndex] === sliceItem
    )
  );
}
__name(arrayFindIndex, "arrayFindIndex");
function convertToLegacy(segments) {
  if (segments[0] === "data") {
    const newSegments = segments.slice(1);
    if (newSegments[2] === "many") {
      newSegments[2] = "getMany";
    } else if (newSegments[2] === "infinite") {
      newSegments[2] = "list";
    } else if (newSegments[2] === "one") {
      newSegments[2] = "detail";
    } else if (newSegments[1] === "custom") {
      const newParams = {
        ...newSegments[2]
      };
      delete newParams.method;
      delete newParams.url;
      return [
        newSegments[0],
        newSegments[1],
        newSegments[2].method,
        newSegments[2].url,
        newParams
      ];
    }
    return newSegments;
  }
  if (segments[0] === "audit") {
    if (segments[2] === "list") {
      return ["logList", segments[1], segments[3]];
    }
  }
  if (segments[0] === "access") {
    if (segments.length === 4) {
      return [
        "useCan",
        {
          resource: segments[1],
          action: segments[2],
          ...segments[3]
          // params: { params, enabled }
        }
      ];
    }
  }
  if (segments[0] === "auth") {
    if (arrayFindIndex(segments, ["auth", "login"]) !== -1) {
      return ["useLogin"];
    }
    if (arrayFindIndex(segments, ["auth", "logout"]) !== -1) {
      return ["useLogout"];
    }
    if (arrayFindIndex(segments, ["auth", "identity"]) !== -1) {
      return ["getUserIdentity"];
    }
    if (arrayFindIndex(segments, ["auth", "register"]) !== -1) {
      return ["useRegister"];
    }
    if (arrayFindIndex(segments, ["auth", "forgotPassword"]) !== -1) {
      return ["useForgotPassword"];
    }
    if (arrayFindIndex(segments, ["auth", "check"]) !== -1) {
      return ["useAuthenticated", segments[2]];
    }
    if (arrayFindIndex(segments, ["auth", "onError"]) !== -1) {
      return ["useCheckError"];
    }
    if (arrayFindIndex(segments, ["auth", "permissions"]) !== -1) {
      return ["usePermissions"];
    }
    if (arrayFindIndex(segments, ["auth", "updatePassword"]) !== -1) {
      return ["useUpdatePassword"];
    }
  }
  return segments;
}
__name(convertToLegacy, "convertToLegacy");
var BaseKeyBuilder = class {
  constructor(segments = []) {
    this.segments = [];
    this.segments = segments;
  }
  key() {
    return this.segments;
  }
  legacy() {
    return convertToLegacy(this.segments);
  }
  get(legacy) {
    return legacy ? this.legacy() : this.segments;
  }
};
__name(BaseKeyBuilder, "BaseKeyBuilder");
var ParamsKeyBuilder = class extends BaseKeyBuilder {
  params(paramsValue) {
    return new BaseKeyBuilder([...this.segments, paramsValue]);
  }
};
__name(ParamsKeyBuilder, "ParamsKeyBuilder");
var DataIdRequiringKeyBuilder = class extends BaseKeyBuilder {
  id(idValue) {
    return new ParamsKeyBuilder([
      ...this.segments,
      idValue ? String(idValue) : void 0
    ]);
  }
};
__name(DataIdRequiringKeyBuilder, "DataIdRequiringKeyBuilder");
var DataIdsRequiringKeyBuilder = class extends BaseKeyBuilder {
  ids(...idsValue) {
    return new ParamsKeyBuilder([
      ...this.segments,
      ...idsValue.length ? [idsValue.map((el) => String(el))] : []
    ]);
  }
};
__name(DataIdsRequiringKeyBuilder, "DataIdsRequiringKeyBuilder");
var DataResourceKeyBuilder = class extends BaseKeyBuilder {
  action(actionType) {
    if (actionType === "one") {
      return new DataIdRequiringKeyBuilder([...this.segments, actionType]);
    }
    if (actionType === "many") {
      return new DataIdsRequiringKeyBuilder([...this.segments, actionType]);
    }
    if (["list", "infinite"].includes(actionType)) {
      return new ParamsKeyBuilder([...this.segments, actionType]);
    }
    throw new Error("Invalid action type");
  }
};
__name(DataResourceKeyBuilder, "DataResourceKeyBuilder");
var DataKeyBuilder = class extends BaseKeyBuilder {
  resource(resourceName) {
    return new DataResourceKeyBuilder([...this.segments, resourceName]);
  }
  mutation(mutationName) {
    return new ParamsKeyBuilder([
      ...mutationName === "custom" ? this.segments : [this.segments[0]],
      mutationName
    ]);
  }
};
__name(DataKeyBuilder, "DataKeyBuilder");
var AuthKeyBuilder = class extends BaseKeyBuilder {
  action(actionType) {
    return new ParamsKeyBuilder([...this.segments, actionType]);
  }
};
__name(AuthKeyBuilder, "AuthKeyBuilder");
var AccessResourceKeyBuilder = class extends BaseKeyBuilder {
  action(resourceName) {
    return new ParamsKeyBuilder([...this.segments, resourceName]);
  }
};
__name(AccessResourceKeyBuilder, "AccessResourceKeyBuilder");
var AccessKeyBuilder = class extends BaseKeyBuilder {
  resource(resourceName) {
    return new AccessResourceKeyBuilder([...this.segments, resourceName]);
  }
};
__name(AccessKeyBuilder, "AccessKeyBuilder");
var AuditActionKeyBuilder = class extends BaseKeyBuilder {
  action(actionType) {
    return new ParamsKeyBuilder([...this.segments, actionType]);
  }
};
__name(AuditActionKeyBuilder, "AuditActionKeyBuilder");
var AuditKeyBuilder = class extends BaseKeyBuilder {
  resource(resourceName) {
    return new AuditActionKeyBuilder([...this.segments, resourceName]);
  }
  action(actionType) {
    return new ParamsKeyBuilder([...this.segments, actionType]);
  }
};
__name(AuditKeyBuilder, "AuditKeyBuilder");
var KeyBuilder = class extends BaseKeyBuilder {
  data(name) {
    return new DataKeyBuilder(["data", name || "default"]);
  }
  auth() {
    return new AuthKeyBuilder(["auth"]);
  }
  access() {
    return new AccessKeyBuilder(["access"]);
  }
  audit() {
    return new AuditKeyBuilder(["audit"]);
  }
};
__name(KeyBuilder, "KeyBuilder");
var keys = /* @__PURE__ */ __name(() => new KeyBuilder([]), "keys");

// src/definitions/helpers/queryKeys/index.ts
var queryKeys = /* @__PURE__ */ __name((resource, dataProviderName, meta, metaData) => {
  const providerName = dataProviderName || "default";
  const keys2 = {
    all: [providerName],
    resourceAll: [providerName, resource || ""],
    list: (config) => [
      ...keys2.resourceAll,
      "list",
      {
        ...config,
        ...pickNotDeprecated(meta, metaData) || {}
      }
    ],
    many: (ids) => [
      ...keys2.resourceAll,
      "getMany",
      ids == null ? void 0 : ids.map(String),
      { ...pickNotDeprecated(meta, metaData) || {} }
    ].filter((item) => item !== void 0),
    detail: (id) => [
      ...keys2.resourceAll,
      "detail",
      id == null ? void 0 : id.toString(),
      { ...pickNotDeprecated(meta, metaData) || {} }
    ],
    logList: (meta2) => ["logList", resource, meta2, metaData].filter(
      (item) => item !== void 0
    )
  };
  return keys2;
}, "queryKeys");
var queryKeysReplacement = /* @__PURE__ */ __name((preferLegacyKeys) => {
  return (resource, dataProviderName, meta, metaData) => {
    const providerName = dataProviderName || "default";
    const keys2 = {
      all: keys().data(providerName).get(preferLegacyKeys),
      resourceAll: keys().data(dataProviderName).resource(resource ?? "").get(preferLegacyKeys),
      list: (config) => keys().data(dataProviderName).resource(resource ?? "").action("list").params({
        ...config,
        ...pickNotDeprecated(meta, metaData) || {}
      }).get(preferLegacyKeys),
      many: (ids) => keys().data(dataProviderName).resource(resource ?? "").action("many").ids(...ids ?? []).params({
        ...pickNotDeprecated(meta, metaData) || {}
      }).get(preferLegacyKeys),
      detail: (id) => keys().data(dataProviderName).resource(resource ?? "").action("one").id(id ?? "").params({
        ...pickNotDeprecated(meta, metaData) || {}
      }).get(preferLegacyKeys),
      logList: (meta2) => [
        ...keys().audit().resource(resource).action("list").params(meta2).get(preferLegacyKeys),
        metaData
      ].filter((item) => item !== void 0)
    };
    return keys2;
  };
}, "queryKeysReplacement");

// src/definitions/helpers/hasPermission/index.ts
var hasPermission = /* @__PURE__ */ __name((permissions, action) => {
  if (!permissions || !action) {
    return false;
  }
  return !!permissions.find((i) => i === action);
}, "hasPermission");

// src/definitions/helpers/router/is-parameter.ts
var isParameter = /* @__PURE__ */ __name((segment) => {
  return segment.startsWith(":");
}, "isParameter");

// src/definitions/helpers/router/split-to-segments.ts
var splitToSegments = /* @__PURE__ */ __name((path) => {
  const segments = path.split("/").filter((segment) => segment !== "");
  return segments;
}, "splitToSegments");

// src/definitions/helpers/router/is-segment-counts-same.ts
var isSegmentCountsSame = /* @__PURE__ */ __name((route, resourceRoute) => {
  const routeSegments = splitToSegments(route);
  const resourceRouteSegments = splitToSegments(resourceRoute);
  return routeSegments.length === resourceRouteSegments.length;
}, "isSegmentCountsSame");

// src/definitions/helpers/router/remove-leading-trailing-slashes.ts
var removeLeadingTrailingSlashes = /* @__PURE__ */ __name((route) => {
  return route.replace(/^\/|\/$/g, "");
}, "removeLeadingTrailingSlashes");

// src/definitions/helpers/router/check-by-segments.ts
var checkBySegments = /* @__PURE__ */ __name((route, resourceRoute) => {
  const stdRoute = removeLeadingTrailingSlashes(route);
  const stdResourceRoute = removeLeadingTrailingSlashes(resourceRoute);
  if (!isSegmentCountsSame(stdRoute, stdResourceRoute)) {
    return false;
  }
  const routeSegments = splitToSegments(stdRoute);
  const resourceRouteSegments = splitToSegments(stdResourceRoute);
  return resourceRouteSegments.every((segment, index) => {
    return isParameter(segment) || segment === routeSegments[index];
  });
}, "checkBySegments");

// src/definitions/helpers/router/get-default-action-path.ts
var getDefaultActionPath = /* @__PURE__ */ __name((resourceName, action, parentPrefix) => {
  const cleanParentPrefix = removeLeadingTrailingSlashes(parentPrefix || "");
  let path = `${cleanParentPrefix}${cleanParentPrefix ? "/" : ""}${resourceName}`;
  if (action === "list") {
    path = `${path}`;
  } else if (action === "create") {
    path = `${path}/create`;
  } else if (action === "edit") {
    path = `${path}/edit/:id`;
  } else if (action === "show") {
    path = `${path}/show/:id`;
  } else if (action === "clone") {
    path = `${path}/clone/:id`;
  }
  return `/${path.replace(/^\//, "")}`;
}, "getDefaultActionPath");

// src/definitions/helpers/router/get-parent-resource.ts
var getParentResource = /* @__PURE__ */ __name((resource, resources) => {
  var _a, _b;
  const parentName = pickNotDeprecated(
    (_a = resource.meta) == null ? void 0 : _a.parent,
    (_b = resource.options) == null ? void 0 : _b.parent,
    resource.parentName
  );
  if (!parentName) {
    return void 0;
  }
  const parentResource = resources.find(
    (resource2) => (resource2.identifier ?? resource2.name) === parentName
  );
  return parentResource ?? { name: parentName };
}, "getParentResource");

// src/definitions/helpers/router/get-parent-prefix-for-resource.ts
var getParentPrefixForResource = /* @__PURE__ */ __name((resource, resources, legacy) => {
  const parents = [];
  let parent = getParentResource(resource, resources);
  while (parent) {
    parents.push(parent);
    parent = getParentResource(parent, resources);
  }
  if (parents.length === 0) {
    return void 0;
  }
  return `/${parents.reverse().map((parent2) => {
    var _a;
    const v = legacy ? ((_a = parent2.options) == null ? void 0 : _a.route) ?? parent2.name : parent2.name;
    return removeLeadingTrailingSlashes(v);
  }).join("/")}`;
}, "getParentPrefixForResource");

// src/definitions/helpers/router/get-action-routes-from-resource.ts
var getActionRoutesFromResource = /* @__PURE__ */ __name((resource, resources, legacy) => {
  const actions = [];
  const actionList = ["list", "show", "edit", "create", "clone"];
  const parentPrefix = getParentPrefixForResource(resource, resources, legacy);
  actionList.forEach((action) => {
    var _a, _b;
    const item = legacy && action === "clone" ? resource.create : resource[action];
    let route = void 0;
    if (typeof item === "function" || legacy) {
      route = getDefaultActionPath(
        legacy ? ((_a = resource.meta) == null ? void 0 : _a.route) ?? ((_b = resource.options) == null ? void 0 : _b.route) ?? resource.name : resource.name,
        action,
        legacy ? parentPrefix : void 0
      );
    } else if (typeof item === "string") {
      route = item;
    } else if (typeof item === "object") {
      route = item.path;
    }
    if (route) {
      actions.push({
        action,
        resource,
        route: `/${route.replace(/^\//, "")}`
      });
    }
  });
  return actions;
}, "getActionRoutesFromResource");

// src/definitions/helpers/router/pick-matched-route.ts
var pickMatchedRoute = /* @__PURE__ */ __name((routes) => {
  var _a;
  if (routes.length === 0) {
    return void 0;
  }
  if (routes.length === 1) {
    return routes[0];
  }
  const sanitizedRoutes = routes.map((route) => ({
    ...route,
    splitted: splitToSegments(removeLeadingTrailingSlashes(route.route))
  }));
  const segmentsCount = ((_a = sanitizedRoutes[0]) == null ? void 0 : _a.splitted.length) ?? 0;
  let eligibleRoutes = [
    ...sanitizedRoutes
  ];
  for (let i = 0; i < segmentsCount; i++) {
    const nonParametrizedRoutes = eligibleRoutes.filter(
      (route) => !isParameter(route.splitted[i])
    );
    if (nonParametrizedRoutes.length === 0) {
      continue;
    }
    if (nonParametrizedRoutes.length === 1) {
      eligibleRoutes = nonParametrizedRoutes;
      break;
    }
    eligibleRoutes = nonParametrizedRoutes;
  }
  return eligibleRoutes[0];
}, "pickMatchedRoute");

// src/definitions/helpers/router/match-resource-from-route.ts
var matchResourceFromRoute = /* @__PURE__ */ __name((route, resources) => {
  const allActionRoutes = resources.flatMap((resource) => {
    return getActionRoutesFromResource(resource, resources);
  });
  const allFound = allActionRoutes.filter((actionRoute) => {
    return checkBySegments(route, actionRoute.route);
  });
  const mostEligible = pickMatchedRoute(allFound);
  return {
    found: !!mostEligible,
    resource: mostEligible == null ? void 0 : mostEligible.resource,
    action: mostEligible == null ? void 0 : mostEligible.action,
    matchedRoute: mostEligible == null ? void 0 : mostEligible.route
  };
}, "matchResourceFromRoute");

// src/definitions/helpers/routeGenerator/index.ts
var routeGenerator = /* @__PURE__ */ __name((item, resourcesFromProps) => {
  var _a;
  let route;
  const parentPrefix = getParentPrefixForResource(
    item,
    resourcesFromProps,
    true
  );
  if (parentPrefix) {
    const meta = pickNotDeprecated(item.meta, item.options);
    route = `${parentPrefix}/${(meta == null ? void 0 : meta.route) ?? item.name}`;
  } else {
    route = ((_a = item.options) == null ? void 0 : _a.route) ?? item.name;
  }
  return `/${route.replace(/^\//, "")}`;
}, "routeGenerator");

// src/definitions/helpers/treeView/createTreeView/index.ts
var createTreeView = /* @__PURE__ */ __name((resources) => {
  var _a;
  const tree = [];
  const resourcesRouteObject = {};
  const resourcesNameObject = {};
  let parent;
  let child;
  for (let i = 0; i < resources.length; i++) {
    parent = resources[i];
    const route = parent.route ?? ((_a = pickNotDeprecated(parent == null ? void 0 : parent.meta, parent.options)) == null ? void 0 : _a.route) ?? "";
    resourcesRouteObject[route] = parent;
    resourcesRouteObject[route]["children"] = [];
    resourcesNameObject[parent.name] = parent;
    resourcesNameObject[parent.name]["children"] = [];
  }
  for (const name in resourcesRouteObject) {
    if (Object.hasOwn(resourcesRouteObject, name)) {
      child = resourcesRouteObject[name];
      if (child.parentName && resourcesNameObject[child.parentName]) {
        resourcesNameObject[child.parentName]["children"].push(child);
      } else {
        tree.push(child);
      }
    }
  }
  return tree;
}, "createTreeView");

// src/definitions/helpers/humanizeString/index.ts
var humanizeString = /* @__PURE__ */ __name((text2) => {
  text2 = text2.replace(/([a-z]{1})([A-Z]{1})/g, "$1-$2");
  text2 = text2.replace(/([A-Z]{1})([A-Z]{1})([a-z]{1})/g, "$1-$2$3");
  text2 = text2.toLowerCase().replace(/[_-]+/g, " ").replace(/\s{2,}/g, " ").trim();
  text2 = text2.charAt(0).toUpperCase() + text2.slice(1);
  return text2;
}, "humanizeString");

// src/contexts/refine/index.tsx
var import_react2 = __toESM(require("react"));
var import_pluralize2 = __toESM(require("pluralize"));

// src/components/layoutWrapper/defaultLayout/index.tsx
var import_react = __toESM(require("react"));
var DefaultLayout = /* @__PURE__ */ __name(({ children }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", null, children);
}, "DefaultLayout");

// src/contexts/refine/index.tsx
var defaultRefineOptions = {
  mutationMode: "pessimistic",
  syncWithLocation: false,
  undoableTimeout: 5e3,
  warnWhenUnsavedChanges: false,
  liveMode: "off",
  redirect: {
    afterCreate: "list",
    afterClone: "list",
    afterEdit: "list"
  },
  overtime: {
    interval: 1e3
  },
  textTransformers: {
    humanize: humanizeString,
    plural: import_pluralize2.default.plural,
    singular: import_pluralize2.default.singular
  },
  disableServerSideValidation: false
};
var RefineContext = import_react2.default.createContext({
  hasDashboard: false,
  mutationMode: "pessimistic",
  warnWhenUnsavedChanges: false,
  syncWithLocation: false,
  undoableTimeout: 5e3,
  Title: void 0,
  Sider: void 0,
  Header: void 0,
  Footer: void 0,
  Layout: DefaultLayout,
  OffLayoutArea: void 0,
  liveMode: "off",
  onLiveEvent: void 0,
  options: defaultRefineOptions
});
var RefineContextProvider = /* @__PURE__ */ __name(({
  hasDashboard,
  mutationMode,
  warnWhenUnsavedChanges,
  syncWithLocation,
  undoableTimeout,
  children,
  DashboardPage,
  Title,
  Layout = DefaultLayout,
  Header,
  Sider,
  Footer,
  OffLayoutArea,
  LoginPage: LoginPage3 = LoginPage,
  catchAll,
  liveMode = "off",
  onLiveEvent,
  options
}) => {
  return /* @__PURE__ */ import_react2.default.createElement(
    RefineContext.Provider,
    {
      value: {
        __initialized: true,
        hasDashboard,
        mutationMode,
        warnWhenUnsavedChanges,
        syncWithLocation,
        Title,
        undoableTimeout,
        Layout,
        Header,
        Sider,
        Footer,
        OffLayoutArea,
        DashboardPage,
        LoginPage: LoginPage3,
        catchAll,
        liveMode,
        onLiveEvent,
        options
      }
    },
    children
  );
}, "RefineContextProvider");

// src/definitions/helpers/handleRefineOptions/index.ts
var handleRefineOptions = /* @__PURE__ */ __name(({
  options,
  disableTelemetry,
  liveMode,
  mutationMode,
  reactQueryClientConfig,
  reactQueryDevtoolConfig,
  syncWithLocation,
  undoableTimeout,
  warnWhenUnsavedChanges
} = {}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const optionsWithDefaults = {
    breadcrumb: options == null ? void 0 : options.breadcrumb,
    mutationMode: (options == null ? void 0 : options.mutationMode) ?? mutationMode ?? defaultRefineOptions.mutationMode,
    undoableTimeout: (options == null ? void 0 : options.undoableTimeout) ?? undoableTimeout ?? defaultRefineOptions.undoableTimeout,
    syncWithLocation: (options == null ? void 0 : options.syncWithLocation) ?? syncWithLocation ?? defaultRefineOptions.syncWithLocation,
    warnWhenUnsavedChanges: (options == null ? void 0 : options.warnWhenUnsavedChanges) ?? warnWhenUnsavedChanges ?? defaultRefineOptions.warnWhenUnsavedChanges,
    liveMode: (options == null ? void 0 : options.liveMode) ?? liveMode ?? defaultRefineOptions.liveMode,
    redirect: {
      afterCreate: ((_a = options == null ? void 0 : options.redirect) == null ? void 0 : _a.afterCreate) ?? defaultRefineOptions.redirect.afterCreate,
      afterClone: ((_b = options == null ? void 0 : options.redirect) == null ? void 0 : _b.afterClone) ?? defaultRefineOptions.redirect.afterClone,
      afterEdit: ((_c = options == null ? void 0 : options.redirect) == null ? void 0 : _c.afterEdit) ?? defaultRefineOptions.redirect.afterEdit
    },
    overtime: (options == null ? void 0 : options.overtime) ?? defaultRefineOptions.overtime,
    textTransformers: {
      humanize: ((_d = options == null ? void 0 : options.textTransformers) == null ? void 0 : _d.humanize) ?? defaultRefineOptions.textTransformers.humanize,
      plural: ((_e = options == null ? void 0 : options.textTransformers) == null ? void 0 : _e.plural) ?? defaultRefineOptions.textTransformers.plural,
      singular: ((_f = options == null ? void 0 : options.textTransformers) == null ? void 0 : _f.singular) ?? defaultRefineOptions.textTransformers.singular
    },
    disableServerSideValidation: (options == null ? void 0 : options.disableServerSideValidation) ?? defaultRefineOptions.disableServerSideValidation,
    projectId: options == null ? void 0 : options.projectId,
    useNewQueryKeys: options == null ? void 0 : options.useNewQueryKeys
  };
  const disableTelemetryWithDefault = (options == null ? void 0 : options.disableTelemetry) ?? disableTelemetry ?? false;
  const reactQueryWithDefaults = {
    clientConfig: ((_g = options == null ? void 0 : options.reactQuery) == null ? void 0 : _g.clientConfig) ?? reactQueryClientConfig ?? {},
    devtoolConfig: ((_h = options == null ? void 0 : options.reactQuery) == null ? void 0 : _h.devtoolConfig) ?? reactQueryDevtoolConfig ?? {}
  };
  return {
    optionsWithDefaults,
    disableTelemetryWithDefault,
    reactQueryWithDefaults
  };
}, "handleRefineOptions");

// src/definitions/helpers/redirectPage/index.ts
var redirectPage = /* @__PURE__ */ __name(({
  redirectFromProps,
  action,
  redirectOptions
}) => {
  if (redirectFromProps || redirectFromProps === false) {
    return redirectFromProps;
  }
  switch (action) {
    case "clone":
      return redirectOptions.afterClone;
    case "create":
      return redirectOptions.afterCreate;
    case "edit":
      return redirectOptions.afterEdit;
    default:
      return false;
  }
}, "redirectPage");

// src/definitions/helpers/sequentialPromises/index.ts
var sequentialPromises = /* @__PURE__ */ __name(async (promises, onEachResolve, onEachReject) => {
  const results = [];
  for (const [index, promise] of promises.entries()) {
    try {
      const result = await promise();
      results.push(onEachResolve(result, index));
    } catch (error) {
      results.push(onEachReject(error, index));
    }
  }
  return results;
}, "sequentialPromises");

// src/definitions/helpers/pick-resource/index.ts
var pickResource = /* @__PURE__ */ __name((identifier, resources = [], legacy = false) => {
  if (!identifier) {
    return void 0;
  }
  if (legacy) {
    const resourceByRoute = resources.find(
      (r) => removeLeadingTrailingSlashes(r.route ?? "") === removeLeadingTrailingSlashes(identifier)
    );
    const resource2 = resourceByRoute ? resourceByRoute : resources.find((r) => r.name === identifier);
    return resource2;
  }
  let resource = resources.find((r) => r.identifier === identifier);
  if (!resource) {
    resource = resources.find((r) => r.name === identifier);
  }
  return resource;
}, "pickResource");

// src/definitions/helpers/pickDataProvider/index.ts
var pickDataProvider = /* @__PURE__ */ __name((resourceName, dataProviderName, resources) => {
  if (dataProviderName) {
    return dataProviderName;
  }
  const resource = pickResource(resourceName, resources);
  const meta = pickNotDeprecated(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options);
  if (meta == null ? void 0 : meta.dataProviderName) {
    return meta.dataProviderName;
  }
  return "default";
}, "pickDataProvider");

// src/definitions/helpers/handleMultiple/index.ts
var handleMultiple = /* @__PURE__ */ __name(async (promises) => {
  return {
    data: (await Promise.all(promises)).map((res) => res.data)
  };
}, "handleMultiple");

// src/definitions/helpers/useInfinitePagination/index.ts
var getNextPageParam = /* @__PURE__ */ __name((lastPage) => {
  const { pagination, cursor } = lastPage;
  if (cursor == null ? void 0 : cursor.next) {
    return cursor.next;
  }
  const current = (pagination == null ? void 0 : pagination.current) || 1;
  const pageSize = (pagination == null ? void 0 : pagination.pageSize) || 10;
  const totalPages = Math.ceil((lastPage.total || 0) / pageSize);
  return current < totalPages ? Number(current) + 1 : void 0;
}, "getNextPageParam");
var getPreviousPageParam = /* @__PURE__ */ __name((lastPage) => {
  const { pagination, cursor } = lastPage;
  if (cursor == null ? void 0 : cursor.prev) {
    return cursor.prev;
  }
  const current = (pagination == null ? void 0 : pagination.current) || 1;
  return current === 1 ? void 0 : current - 1;
}, "getPreviousPageParam");

// src/definitions/helpers/legacy-resource-transform/index.ts
var legacyResourceTransform = /* @__PURE__ */ __name((resources) => {
  const _resources = [];
  resources.forEach((resource) => {
    var _a, _b;
    _resources.push({
      ...resource,
      label: ((_a = resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource.options) == null ? void 0 : _b.label),
      route: routeGenerator(resource, resources),
      canCreate: !!resource.create,
      canEdit: !!resource.edit,
      canShow: !!resource.show,
      canDelete: resource.canDelete
    });
  });
  return _resources;
}, "legacyResourceTransform");

// src/definitions/helpers/router/pick-route-params.ts
var pickRouteParams = /* @__PURE__ */ __name((route) => {
  const segments = splitToSegments(removeLeadingTrailingSlashes(route));
  return segments.flatMap((s) => {
    if (isParameter(s)) {
      return [s.slice(1)];
    }
    return [];
  });
}, "pickRouteParams");

// src/definitions/helpers/router/prepare-route-params.ts
var prepareRouteParams = /* @__PURE__ */ __name((routeParams, meta = {}) => {
  return routeParams.reduce(
    (acc, key) => {
      const value = meta[key];
      if (typeof value !== "undefined") {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
}, "prepareRouteParams");

// src/definitions/helpers/router/compose-route.ts
var composeRoute = /* @__PURE__ */ __name((designatedRoute, resourceMeta = {}, parsed = {}, meta = {}) => {
  const routeParams = pickRouteParams(designatedRoute);
  const preparedRouteParams = prepareRouteParams(routeParams, {
    ...resourceMeta,
    ...typeof (parsed == null ? void 0 : parsed.id) !== "undefined" ? { id: parsed.id } : {},
    ...typeof (parsed == null ? void 0 : parsed.action) !== "undefined" ? { action: parsed.action } : {},
    ...typeof (parsed == null ? void 0 : parsed.resource) !== "undefined" ? { resource: parsed.resource } : {},
    ...parsed == null ? void 0 : parsed.params,
    ...meta
  });
  return designatedRoute.replace(/:([^\/]+)/g, (match, key) => {
    const fromParams = preparedRouteParams[key];
    if (typeof fromParams !== "undefined") {
      return `${fromParams}`;
    }
    return match;
  });
}, "composeRoute");

// src/contexts/auth/index.tsx
var import_react3 = __toESM(require("react"));
var LegacyAuthContext = import_react3.default.createContext({});
var LegacyAuthContextProvider = /* @__PURE__ */ __name(({ children, isProvided, ...authOperations }) => {
  const { replace } = useNavigation();
  const loginFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authOperations.login) == null ? void 0 : _a.call(authOperations, params));
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }, "loginFunc");
  const registerFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authOperations.register) == null ? void 0 : _a.call(authOperations, params));
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }, "registerFunc");
  const logoutFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const redirectPath = await ((_a = authOperations.logout) == null ? void 0 : _a.call(authOperations, params));
      return redirectPath;
    } catch (error) {
      return Promise.reject(error);
    }
  }, "logoutFunc");
  const checkAuthFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      await ((_a = authOperations.checkAuth) == null ? void 0 : _a.call(authOperations, params));
      return Promise.resolve();
    } catch (error) {
      if (error == null ? void 0 : error.redirectPath) {
        replace(error.redirectPath);
      }
      return Promise.reject(error);
    }
  }, "checkAuthFunc");
  return /* @__PURE__ */ import_react3.default.createElement(
    LegacyAuthContext.Provider,
    {
      value: {
        ...authOperations,
        login: loginFunc,
        logout: logoutFunc,
        checkAuth: checkAuthFunc,
        register: registerFunc,
        isProvided
      }
    },
    children
  );
}, "LegacyAuthContextProvider");
var AuthBindingsContext = import_react3.default.createContext({});
var AuthBindingsContextProvider = /* @__PURE__ */ __name(({ children, isProvided, ...authBindings }) => {
  const handleLogin = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.login) == null ? void 0 : _a.call(authBindings, params));
      return result;
    } catch (error) {
      console.warn(
        "Unhandled Error in login: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleLogin");
  const handleRegister = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.register) == null ? void 0 : _a.call(authBindings, params));
      return result;
    } catch (error) {
      console.warn(
        "Unhandled Error in register: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleRegister");
  const handleLogout = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.logout) == null ? void 0 : _a.call(authBindings, params));
      return result;
    } catch (error) {
      console.warn(
        "Unhandled Error in logout: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleLogout");
  const handleCheck = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.check) == null ? void 0 : _a.call(authBindings, params));
      return Promise.resolve(result);
    } catch (error) {
      console.warn(
        "Unhandled Error in check: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleCheck");
  const handleForgotPassword = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.forgotPassword) == null ? void 0 : _a.call(authBindings, params));
      return Promise.resolve(result);
    } catch (error) {
      console.warn(
        "Unhandled Error in forgotPassword: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleForgotPassword");
  const handleUpdatePassword = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.updatePassword) == null ? void 0 : _a.call(authBindings, params));
      return Promise.resolve(result);
    } catch (error) {
      console.warn(
        "Unhandled Error in updatePassword: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleUpdatePassword");
  return /* @__PURE__ */ import_react3.default.createElement(
    AuthBindingsContext.Provider,
    {
      value: {
        ...authBindings,
        login: handleLogin,
        logout: handleLogout,
        check: handleCheck,
        register: handleRegister,
        forgotPassword: handleForgotPassword,
        updatePassword: handleUpdatePassword,
        isProvided
      }
    },
    children
  );
}, "AuthBindingsContextProvider");
var useLegacyAuthContext = /* @__PURE__ */ __name(() => {
  const context = import_react3.default.useContext(LegacyAuthContext);
  return context;
}, "useLegacyAuthContext");
var useAuthBindingsContext = /* @__PURE__ */ __name(() => {
  const context = import_react3.default.useContext(AuthBindingsContext);
  return context;
}, "useAuthBindingsContext");

// src/definitions/helpers/useActiveAuthProvider/index.ts
var useActiveAuthProvider = /* @__PURE__ */ __name(() => {
  const legacyAuthProvider = useLegacyAuthContext();
  const authProvider = useAuthBindingsContext();
  if (authProvider.isProvided) {
    return { isLegacy: false, ...authProvider };
  }
  if (legacyAuthProvider.isProvided) {
    return {
      isLegacy: true,
      ...legacyAuthProvider,
      check: legacyAuthProvider.checkAuth,
      onError: legacyAuthProvider.checkError,
      getIdentity: legacyAuthProvider.getUserIdentity
    };
  }
  return null;
}, "useActiveAuthProvider");

// src/definitions/helpers/handlePaginationParams/index.ts
var handlePaginationParams = /* @__PURE__ */ __name(({
  hasPagination,
  pagination,
  configPagination
} = {}) => {
  const hasPaginationString = hasPagination === false ? "off" : "server";
  const mode = (pagination == null ? void 0 : pagination.mode) ?? hasPaginationString;
  const current = pickNotDeprecated(pagination == null ? void 0 : pagination.current, configPagination == null ? void 0 : configPagination.current) ?? 1;
  const pageSize = pickNotDeprecated(pagination == null ? void 0 : pagination.pageSize, configPagination == null ? void 0 : configPagination.pageSize) ?? 10;
  return {
    current,
    pageSize,
    mode
  };
}, "handlePaginationParams");

// src/definitions/helpers/useMediaQuery/index.ts
var import_react4 = require("react");
var useMediaQuery = /* @__PURE__ */ __name((query) => {
  const [matches, setMatches] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = /* @__PURE__ */ __name(() => setMatches(media.matches), "listener");
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
}, "useMediaQuery");

// src/definitions/helpers/safe-translate/index.ts
var safeTranslate = /* @__PURE__ */ __name((translate, key, defaultMessage, options) => {
  const translated = options ? translate(key, options, defaultMessage) : translate(key, defaultMessage);
  const fallback = defaultMessage ?? key;
  if (translated === key || typeof translated === "undefined") {
    return fallback;
  }
  return translated;
}, "safeTranslate");

// src/definitions/helpers/generateDocumentTitle/index.ts
function generateDefaultDocumentTitle(translate, resource, action, id, resourceName) {
  var _a;
  const actionPrefixMatcher = {
    create: "Create new ",
    clone: `#${id ?? ""} Clone `,
    edit: `#${id ?? ""} Edit `,
    show: `#${id ?? ""} Show `,
    list: ""
  };
  const identifier = (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name);
  const resourceNameFallback = (resource == null ? void 0 : resource.label) ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? userFriendlyResourceName(
    identifier,
    action === "list" ? "plural" : "singular"
  );
  const resourceNameWithFallback = resourceName ?? resourceNameFallback;
  const defaultTitle = safeTranslate(
    translate,
    "documentTitle.default",
    "refine"
  );
  const suffix = safeTranslate(translate, "documentTitle.suffix", " | refine");
  let autoGeneratedTitle = defaultTitle;
  if (action && identifier) {
    autoGeneratedTitle = safeTranslate(
      translate,
      `documentTitle.${identifier}.${action}`,
      `${actionPrefixMatcher[action] ?? ""}${resourceNameWithFallback}${suffix}`,
      { id }
    );
  }
  return autoGeneratedTitle;
}
__name(generateDefaultDocumentTitle, "generateDefaultDocumentTitle");

// src/hooks/refine/useMutationMode.ts
var import_react5 = require("react");
var useMutationMode = /* @__PURE__ */ __name(() => {
  const { mutationMode, undoableTimeout } = (0, import_react5.useContext)(RefineContext);
  return { mutationMode, undoableTimeout };
}, "useMutationMode");

// src/hooks/refine/useWarnAboutChange/index.ts
var import_react7 = require("react");

// src/contexts/unsavedWarn/index.tsx
var import_react6 = __toESM(require("react"));
var UnsavedWarnContext = import_react6.default.createContext({});
var UnsavedWarnContextProvider = /* @__PURE__ */ __name(({
  children
}) => {
  const [warnWhen, setWarnWhen] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ import_react6.default.createElement(UnsavedWarnContext.Provider, { value: { warnWhen, setWarnWhen } }, children);
}, "UnsavedWarnContextProvider");

// src/hooks/refine/useWarnAboutChange/index.ts
var useWarnAboutChange = /* @__PURE__ */ __name(() => {
  const { warnWhenUnsavedChanges } = (0, import_react7.useContext)(RefineContext);
  const { warnWhen, setWarnWhen } = (0, import_react7.useContext)(UnsavedWarnContext);
  return {
    warnWhenUnsavedChanges,
    warnWhen: Boolean(warnWhen),
    setWarnWhen: setWarnWhen ?? (() => void 0)
  };
}, "useWarnAboutChange");

// src/hooks/refine/useSyncWithLocation.ts
var import_react8 = require("react");
var useSyncWithLocation = /* @__PURE__ */ __name(() => {
  const { syncWithLocation } = (0, import_react8.useContext)(RefineContext);
  return { syncWithLocation };
}, "useSyncWithLocation");

// src/hooks/refine/useTitle.tsx
var import_react9 = require("react");
var useTitle = /* @__PURE__ */ __name(() => {
  const { Title } = (0, import_react9.useContext)(RefineContext);
  return Title;
}, "useTitle");

// src/hooks/refine/useRefineContext.ts
var import_react10 = require("react");
var useRefineContext = /* @__PURE__ */ __name(() => {
  const {
    Footer,
    Header,
    Layout,
    OffLayoutArea,
    Sider,
    Title,
    hasDashboard,
    mutationMode,
    syncWithLocation,
    undoableTimeout,
    warnWhenUnsavedChanges,
    DashboardPage,
    LoginPage: LoginPage3,
    catchAll,
    options,
    __initialized
  } = (0, import_react10.useContext)(RefineContext);
  return {
    __initialized,
    Footer,
    Header,
    Layout,
    OffLayoutArea,
    Sider,
    Title,
    hasDashboard,
    mutationMode,
    syncWithLocation,
    undoableTimeout,
    warnWhenUnsavedChanges,
    DashboardPage,
    LoginPage: LoginPage3,
    catchAll,
    options
  };
}, "useRefineContext");

// src/definitions/helpers/useUserFriendlyName/index.ts
var useUserFriendlyName = /* @__PURE__ */ __name(() => {
  const {
    options: { textTransformers }
  } = useRefineContext();
  const getFriendlyName = /* @__PURE__ */ __name((name = "", type) => {
    const humanizeName = textTransformers.humanize(name);
    if (type === "singular") {
      return textTransformers.singular(humanizeName);
    }
    return textTransformers.plural(humanizeName);
  }, "getFriendlyName");
  return getFriendlyName;
}, "useUserFriendlyName");

// src/definitions/helpers/flatten-object-keys/index.ts
var isNested = /* @__PURE__ */ __name((obj) => typeof obj === "object" && obj !== null, "isNested");
var isArray = /* @__PURE__ */ __name((obj) => Array.isArray(obj), "isArray");
var flattenObjectKeys = /* @__PURE__ */ __name((obj, prefix = "") => {
  if (!isNested(obj)) {
    return {
      [prefix]: obj
    };
  }
  return Object.keys(obj).reduce(
    (acc, key) => {
      const currentPrefix = prefix.length ? `${prefix}.` : "";
      if (isNested(obj[key]) && Object.keys(obj[key]).length) {
        if (isArray(obj[key]) && obj[key].length) {
          obj[key].forEach((item, index) => {
            Object.assign(
              acc,
              flattenObjectKeys(item, `${currentPrefix + key}.${index}`)
            );
          });
        } else {
          Object.assign(acc, flattenObjectKeys(obj[key], currentPrefix + key));
        }
        acc[currentPrefix + key] = obj[key];
      } else {
        acc[currentPrefix + key] = obj[key];
      }
      return acc;
    },
    {}
  );
}, "flattenObjectKeys");

// src/definitions/helpers/property-path-to-array/index.ts
var propertyPathToArray = /* @__PURE__ */ __name((propertyPath) => {
  return propertyPath.split(".").map((item) => !Number.isNaN(Number(item)) ? Number(item) : item);
}, "propertyPathToArray");

// src/definitions/helpers/downloadInBrowser/index.ts
var downloadInBrowser = /* @__PURE__ */ __name((filename, content, type) => {
  if (typeof window === "undefined") {
    return;
  }
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.setAttribute("visibility", "hidden");
  link.download = filename;
  const blobUrl = URL.createObjectURL(blob);
  link.href = blobUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  });
}, "downloadInBrowser");

// src/definitions/table/index.ts
var parseTableParams = /* @__PURE__ */ __name((url) => {
  const { current, pageSize, sorter, sorters, filters } = import_qs.default.parse(
    url.substring(1)
    // remove first ? character
  );
  return {
    parsedCurrent: current && Number(current),
    parsedPageSize: pageSize && Number(pageSize),
    parsedSorter: pickNotDeprecated(sorters, sorter) ?? [],
    parsedFilters: filters ?? []
  };
}, "parseTableParams");
var parseTableParamsFromQuery = /* @__PURE__ */ __name((params) => {
  const url = import_qs.default.stringify(params);
  return parseTableParams(`/${url}`);
}, "parseTableParamsFromQuery");
var stringifyTableParams = /* @__PURE__ */ __name((params) => {
  const options = {
    skipNulls: true,
    arrayFormat: "indices",
    encode: false
  };
  const { pagination, sorter, sorters, filters, ...rest } = params;
  const queryString = import_qs.default.stringify(
    {
      ...rest,
      ...pagination ? pagination : {},
      sorters: pickNotDeprecated(sorters, sorter),
      filters
    },
    options
  );
  return queryString;
}, "stringifyTableParams");
var compareFilters = /* @__PURE__ */ __name((left, right) => {
  if (left.operator !== "and" && left.operator !== "or" && right.operator !== "and" && right.operator !== "or") {
    return ("field" in left ? left.field : void 0) === ("field" in right ? right.field : void 0) && left.operator === right.operator;
  }
  return ("key" in left ? left.key : void 0) === ("key" in right ? right.key : void 0) && left.operator === right.operator;
}, "compareFilters");
var compareSorters = /* @__PURE__ */ __name((left, right) => left.field === right.field, "compareSorters");
var unionFilters = /* @__PURE__ */ __name((permanentFilter, newFilters, prevFilters = []) => {
  const isKeyRequired = newFilters.filter(
    (f) => (f.operator === "or" || f.operator === "and") && !f.key
  );
  if (isKeyRequired.length > 1) {
    (0, import_warn_once.default)(
      true,
      "[conditionalFilters]: You have created multiple Conditional Filters at the top level, this requires the key parameter. \nFor more information, see https://refine.dev/docs/advanced-tutorials/data-provider/handling-filters/#top-level-multiple-conditional-filters-usage"
    );
  }
  return (0, import_unionWith.default)(
    permanentFilter,
    newFilters,
    prevFilters,
    compareFilters
  ).filter(
    (crudFilter) => crudFilter.value !== void 0 && crudFilter.value !== null && (crudFilter.operator !== "or" || crudFilter.operator === "or" && crudFilter.value.length !== 0) && (crudFilter.operator !== "and" || crudFilter.operator === "and" && crudFilter.value.length !== 0)
  );
}, "unionFilters");
var unionSorters = /* @__PURE__ */ __name((permanentSorter, newSorters) => (0, import_unionWith.default)(permanentSorter, newSorters, compareSorters).filter(
  (crudSorter) => crudSorter.order !== void 0 && crudSorter.order !== null
), "unionSorters");
var setInitialFilters = /* @__PURE__ */ __name((permanentFilter, defaultFilter) => [
  ...(0, import_differenceWith.default)(defaultFilter, permanentFilter, compareFilters),
  ...permanentFilter
], "setInitialFilters");
var setInitialSorters = /* @__PURE__ */ __name((permanentSorter, defaultSorter) => [
  ...(0, import_differenceWith.default)(defaultSorter, permanentSorter, compareSorters),
  ...permanentSorter
], "setInitialSorters");
var getDefaultSortOrder = /* @__PURE__ */ __name((columnName, sorter) => {
  if (!sorter) {
    return void 0;
  }
  const sortItem = sorter.find((item) => item.field === columnName);
  if (sortItem) {
    return sortItem.order;
  }
  return void 0;
}, "getDefaultSortOrder");
var getDefaultFilter = /* @__PURE__ */ __name((columnName, filters, operatorType = "eq") => {
  const filter = filters == null ? void 0 : filters.find((filter2) => {
    if (filter2.operator !== "or" && filter2.operator !== "and" && "field" in filter2) {
      const { operator, field } = filter2;
      return field === columnName && operator === operatorType;
    }
    return void 0;
  });
  if (filter) {
    return filter.value || [];
  }
  return void 0;
}, "getDefaultFilter");

// src/definitions/upload/file2Base64/index.ts
var file2Base64 = /* @__PURE__ */ __name((file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const resultHandler = /* @__PURE__ */ __name(() => {
      if (reader.result) {
        reader.removeEventListener("load", resultHandler, false);
        resolve(reader.result);
      }
    }, "resultHandler");
    reader.addEventListener("load", resultHandler, false);
    reader.readAsDataURL(file.originFileObj);
    reader.onerror = (error) => {
      reader.removeEventListener("load", resultHandler, false);
      return reject(error);
    };
  });
}, "file2Base64");

// src/hooks/useKeys/index.tsx
var useKeys = /* @__PURE__ */ __name(() => {
  const {
    options: { useNewQueryKeys }
  } = useRefineContext();
  return {
    keys,
    preferLegacyKeys: !useNewQueryKeys
  };
}, "useKeys");

// src/hooks/auth/usePermissions/index.ts
function usePermissions({
  v3LegacyAuthProviderCompatible = false,
  options,
  params
} = {}) {
  const { getPermissions: legacyGetPermission } = useLegacyAuthContext();
  const { getPermissions } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = (0, import_react_query.useQuery)({
    queryKey: keys2().auth().action("permissions").get(preferLegacyKeys),
    // Enabled check for `getPermissions` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: getPermissions ? () => getPermissions(params) : () => Promise.resolve(void 0),
    enabled: !v3LegacyAuthProviderCompatible && !!getPermissions,
    ...v3LegacyAuthProviderCompatible ? {} : options,
    meta: {
      ...v3LegacyAuthProviderCompatible ? {} : options == null ? void 0 : options.meta,
      ...(0, import_devtools_internal.getXRay)("usePermissions", preferLegacyKeys)
    }
  });
  const legacyQueryResponse = (0, import_react_query.useQuery)({
    queryKey: [
      ...keys2().auth().action("permissions").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    // Enabled check for `getPermissions` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: legacyGetPermission ? () => legacyGetPermission(params) : () => Promise.resolve(void 0),
    enabled: v3LegacyAuthProviderCompatible && !!legacyGetPermission,
    ...v3LegacyAuthProviderCompatible ? options : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? options == null ? void 0 : options.meta : {},
      ...(0, import_devtools_internal.getXRay)("usePermissions", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}
__name(usePermissions, "usePermissions");

// src/hooks/auth/useGetIdentity/index.ts
var import_react_query2 = require("@tanstack/react-query");
var import_devtools_internal2 = require("@refinedev/devtools-internal");
function useGetIdentity({
  v3LegacyAuthProviderCompatible = false,
  queryOptions
} = {}) {
  const { getUserIdentity: legacyGetUserIdentity } = useLegacyAuthContext();
  const { getIdentity } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = (0, import_react_query2.useQuery)({
    queryKey: keys2().auth().action("identity").get(preferLegacyKeys),
    // Enabled check for `getIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: getIdentity ?? (() => Promise.resolve({})),
    enabled: !v3LegacyAuthProviderCompatible && !!getIdentity,
    retry: false,
    ...v3LegacyAuthProviderCompatible === true ? {} : queryOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : queryOptions == null ? void 0 : queryOptions.meta,
      ...(0, import_devtools_internal2.getXRay)("useGetIdentity", preferLegacyKeys)
    }
  });
  const legacyQueryResponse = (0, import_react_query2.useQuery)({
    queryKey: [
      ...keys2().auth().action("identity").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    // Enabled check for `getUserIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: legacyGetUserIdentity ?? (() => Promise.resolve({})),
    enabled: v3LegacyAuthProviderCompatible && !!legacyGetUserIdentity,
    retry: false,
    ...v3LegacyAuthProviderCompatible ? queryOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? queryOptions == null ? void 0 : queryOptions.meta : {},
      ...(0, import_devtools_internal2.getXRay)("useGetIdentity", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}
__name(useGetIdentity, "useGetIdentity");

// src/hooks/auth/useLogout/index.ts
var import_react_query4 = require("@tanstack/react-query");
var import_devtools_internal3 = require("@refinedev/devtools-internal");

// src/hooks/auth/useInvalidateAuthStore/index.ts
var import_react_query3 = require("@tanstack/react-query");
var useInvalidateAuthStore = /* @__PURE__ */ __name(() => {
  const queryClient = (0, import_react_query3.useQueryClient)();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const invalidate = /* @__PURE__ */ __name(async () => {
    await Promise.all(
      ["check", "identity", "permissions"].map(
        (action) => queryClient.invalidateQueries(
          keys2().auth().action(action).get(preferLegacyKeys)
        )
      )
    );
  }, "invalidate");
  return invalidate;
}, "useInvalidateAuthStore");

// src/hooks/auth/useLogout/index.ts
function useLogout({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const invalidateAuthStore = useInvalidateAuthStore();
  const routerType = useRouterType();
  const go = useGo();
  const { push } = useNavigation();
  const { open, close } = useNotification();
  const { logout: legacyLogoutFromContext } = useLegacyAuthContext();
  const { logout: logoutFromContext } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query4.useMutation)({
    mutationKey: keys2().auth().action("logout").get(preferLegacyKeys),
    mutationFn: logoutFromContext,
    onSuccess: async (data, variables) => {
      const { success, error, redirectTo, successNotification } = data;
      const { redirectPath } = variables ?? {};
      const redirect = redirectPath ?? redirectTo;
      if (success) {
        close == null ? void 0 : close("useLogout-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification(error));
      }
      if (redirect !== false) {
        if (routerType === "legacy") {
          push(redirect ?? "/login");
        } else {
          if (redirect) {
            go({ to: redirect });
          }
        }
      }
      await invalidateAuthStore();
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal3.getXRay)("useLogout", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query4.useMutation)({
    mutationKey: [
      ...keys2().auth().action("logout").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyLogoutFromContext,
    onSuccess: async (data, variables) => {
      const redirectPath = (variables == null ? void 0 : variables.redirectPath) ?? data;
      if (redirectPath === false) {
        return;
      }
      if (redirectPath) {
        if (routerType === "legacy") {
          push(redirectPath);
        } else {
          go({ to: redirectPath });
        }
        return;
      }
      if (routerType === "legacy") {
        push("/login");
      } else {
        go({ to: "/login" });
      }
      await invalidateAuthStore();
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...(0, import_devtools_internal3.getXRay)("useLogout", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useLogout, "useLogout");
var buildNotification = /* @__PURE__ */ __name((error) => {
  return {
    key: "useLogout-error",
    type: "error",
    message: (error == null ? void 0 : error.name) || "Logout Error",
    description: (error == null ? void 0 : error.message) || "Something went wrong during logout"
  };
}, "buildNotification");
var buildSuccessNotification = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "logout-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useLogin/index.ts
var import_react11 = __toESM(require("react"));
var import_react_query5 = require("@tanstack/react-query");
var import_devtools_internal4 = require("@refinedev/devtools-internal");
var import_qs2 = __toESM(require("qs"));
function useLogin({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const invalidateAuthStore = useInvalidateAuthStore();
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const parsed = useParsed();
  const { useLocation } = useRouterContext();
  const { search } = useLocation();
  const { close, open } = useNotification();
  const { login: legacyLoginFromContext } = useLegacyAuthContext();
  const { login: loginFromContext } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const to = import_react11.default.useMemo(() => {
    var _a;
    if (routerType === "legacy") {
      const legacySearch = import_qs2.default.parse(search, {
        ignoreQueryPrefix: true
      });
      return legacySearch.to;
    }
    return (_a = parsed.params) == null ? void 0 : _a.to;
  }, [routerType, parsed.params, search]);
  const mutation = (0, import_react_query5.useMutation)({
    mutationKey: keys2().auth().action("login").get(preferLegacyKeys),
    mutationFn: loginFromContext,
    onSuccess: async ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("login-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification2(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification2(error));
      }
      if (to && success) {
        if (routerType === "legacy") {
          replace(to);
        } else {
          go({ to, type: "replace" });
        }
      } else if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      } else {
        if (routerType === "legacy") {
          replace("/");
        }
      }
      await invalidateAuthStore();
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification2(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal4.getXRay)("useLogin", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query5.useMutation)({
    mutationKey: [
      ...keys2().auth().action("login").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyLoginFromContext,
    onSuccess: async (redirectPathFromAuth) => {
      if (to) {
        replace(to);
      }
      if (redirectPathFromAuth !== false && !to) {
        if (typeof redirectPathFromAuth === "string") {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        } else {
          if (routerType === "legacy") {
            replace("/");
          } else {
            go({ to: "/", type: "replace" });
          }
        }
      }
      await invalidateAuthStore();
      close == null ? void 0 : close("login-error");
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification2(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...(0, import_devtools_internal4.getXRay)("useLogin", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useLogin, "useLogin");
var buildNotification2 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Login Error",
    description: (error == null ? void 0 : error.message) || "Invalid credentials",
    key: "login-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification2 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "login-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useRegister/index.ts
var import_react_query6 = require("@tanstack/react-query");
var import_devtools_internal5 = require("@refinedev/devtools-internal");
function useRegister({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const invalidateAuthStore = useInvalidateAuthStore();
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const { register: legacyRegisterFromContext } = useLegacyAuthContext();
  const { register: registerFromContext } = useAuthBindingsContext();
  const { close, open } = useNotification();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query6.useMutation)({
    mutationKey: keys2().auth().action("register").get(preferLegacyKeys),
    mutationFn: registerFromContext,
    onSuccess: async ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("register-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification3(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification3(error));
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      } else {
        if (routerType === "legacy") {
          replace("/");
        }
      }
      await invalidateAuthStore();
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification3(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal5.getXRay)("useRegister", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query6.useMutation)({
    mutationKey: [
      ...keys2().auth().action("register").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyRegisterFromContext,
    onSuccess: async (redirectPathFromAuth) => {
      if (redirectPathFromAuth !== false) {
        if (redirectPathFromAuth) {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        } else {
          if (routerType === "legacy") {
            replace("/");
          } else {
            go({ to: "/", type: "replace" });
          }
        }
        await invalidateAuthStore();
        close == null ? void 0 : close("register-error");
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification3(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...(0, import_devtools_internal5.getXRay)("useRegister", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useRegister, "useRegister");
var buildNotification3 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Register Error",
    description: (error == null ? void 0 : error.message) || "Error while registering",
    key: "register-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification3 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "register-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useForgotPassword/index.ts
var import_react_query7 = require("@tanstack/react-query");
var import_devtools_internal6 = require("@refinedev/devtools-internal");
function useForgotPassword({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const {
    forgotPassword: v3LegacyAuthProviderCompatibleForgotPasswordFromContext
  } = useLegacyAuthContext();
  const { forgotPassword: forgotPasswordFromContext } = useAuthBindingsContext();
  const { close, open } = useNotification();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query7.useMutation)({
    mutationKey: keys2().auth().action("forgotPassword").get(preferLegacyKeys),
    mutationFn: forgotPasswordFromContext,
    onSuccess: ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("forgot-password-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification4(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification4(error));
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification4(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal6.getXRay)("useForgotPassword", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query7.useMutation)({
    mutationKey: [
      ...keys2().auth().action("forgotPassword").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: v3LegacyAuthProviderCompatibleForgotPasswordFromContext,
    onSuccess: (redirectPathFromAuth) => {
      if (redirectPathFromAuth !== false) {
        if (redirectPathFromAuth) {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        }
      }
      close == null ? void 0 : close("forgot-password-error");
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification4(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...(0, import_devtools_internal6.getXRay)("useForgotPassword", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useForgotPassword, "useForgotPassword");
var buildNotification4 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Forgot Password Error",
    description: (error == null ? void 0 : error.message) || "Error while resetting password",
    key: "forgot-password-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification4 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "forgot-password-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useUpdatePassword/index.ts
var import_react12 = __toESM(require("react"));
var import_react_query8 = require("@tanstack/react-query");
var import_devtools_internal7 = require("@refinedev/devtools-internal");
var import_qs3 = __toESM(require("qs"));
function useUpdatePassword({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const { updatePassword: legacyUpdatePasswordFromContext } = useLegacyAuthContext();
  const { updatePassword: updatePasswordFromContext } = useAuthBindingsContext();
  const { close, open } = useNotification();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const parsed = useParsed();
  const { useLocation } = useRouterContext();
  const { search } = useLocation();
  const params = import_react12.default.useMemo(() => {
    if (routerType === "legacy") {
      const queryStrings = import_qs3.default.parse(search, {
        ignoreQueryPrefix: true
      });
      return queryStrings ?? {};
    }
    return parsed.params ?? {};
  }, [search, parsed, routerType]);
  const mutation = (0, import_react_query8.useMutation)({
    mutationKey: keys2().auth().action("updatePassword").get(preferLegacyKeys),
    mutationFn: async (variables) => {
      return updatePasswordFromContext == null ? void 0 : updatePasswordFromContext({
        ...params,
        ...variables
      });
    },
    onSuccess: ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("update-password-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification5(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification5(error));
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification5(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal7.getXRay)("useUpdatePassword", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query8.useMutation)({
    mutationKey: [
      ...keys2().auth().action("updatePassword").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: async (variables) => {
      return legacyUpdatePasswordFromContext == null ? void 0 : legacyUpdatePasswordFromContext({
        ...params,
        ...variables
      });
    },
    onSuccess: (redirectPathFromAuth) => {
      if (redirectPathFromAuth !== false) {
        if (redirectPathFromAuth) {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        }
      }
      close == null ? void 0 : close("update-password-error");
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification5(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...(0, import_devtools_internal7.getXRay)("useUpdatePassword", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useUpdatePassword, "useUpdatePassword");
var buildNotification5 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Update Password Error",
    description: (error == null ? void 0 : error.message) || "Error while updating password",
    key: "update-password-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification5 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "update-password-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useIsAuthenticated/index.ts
var import_react_query9 = require("@tanstack/react-query");
var import_devtools_internal8 = require("@refinedev/devtools-internal");
function useIsAuthenticated({
  v3LegacyAuthProviderCompatible = false,
  params
} = {}) {
  const { checkAuth } = useLegacyAuthContext();
  const { check } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = (0, import_react_query9.useQuery)({
    queryKey: keys2().auth().action("check").params(params).get(preferLegacyKeys),
    queryFn: async () => await (check == null ? void 0 : check(params)) ?? {},
    retry: false,
    enabled: !v3LegacyAuthProviderCompatible,
    meta: {
      ...(0, import_devtools_internal8.getXRay)("useIsAuthenticated", preferLegacyKeys)
    }
  });
  const legacyQueryResponse = (0, import_react_query9.useQuery)({
    queryKey: [
      ...keys2().auth().action("check").params(params).get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    queryFn: async () => await (checkAuth == null ? void 0 : checkAuth(params)) ?? {},
    retry: false,
    enabled: v3LegacyAuthProviderCompatible,
    meta: {
      ...(0, import_devtools_internal8.getXRay)("useIsAuthenticated", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}
__name(useIsAuthenticated, "useIsAuthenticated");
var useAuthenticated = useIsAuthenticated;

// src/hooks/auth/useOnError/index.ts
var import_react_query10 = require("@tanstack/react-query");
var import_devtools_internal9 = require("@refinedev/devtools-internal");
function useOnError({
  v3LegacyAuthProviderCompatible = false
} = {}) {
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const { checkError: legacyCheckErrorFromContext } = useLegacyAuthContext();
  const { onError: onErrorFromContext } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const { mutate: legacyLogout } = useLogout({
    v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible)
  });
  const { mutate: logout } = useLogout({
    v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible)
  });
  const mutation = (0, import_react_query10.useMutation)({
    mutationKey: keys2().auth().action("onError").get(preferLegacyKeys),
    mutationFn: onErrorFromContext,
    onSuccess: ({ logout: shouldLogout, redirectTo }) => {
      if (shouldLogout) {
        logout({ redirectPath: redirectTo });
        return;
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
        return;
      }
    },
    meta: {
      ...(0, import_devtools_internal9.getXRay)("useOnError", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query10.useMutation)({
    mutationKey: [
      ...keys2().auth().action("onError").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyCheckErrorFromContext,
    onError: (redirectPath) => {
      legacyLogout({ redirectPath });
    },
    meta: {
      ...(0, import_devtools_internal9.getXRay)("useOnError", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useOnError, "useOnError");
var useCheckError = useOnError;

// src/hooks/auth/useIsExistAuthentication/index.ts
var useIsExistAuthentication = /* @__PURE__ */ __name(() => {
  const { isProvided: legacyIsProvided } = useLegacyAuthContext();
  const { isProvided } = useAuthBindingsContext();
  return Boolean(isProvided || legacyIsProvided);
}, "useIsExistAuthentication");

// src/hooks/data/useList.ts
var import_devtools_internal10 = require("@refinedev/devtools-internal");
var import_react_query11 = require("@tanstack/react-query");

// src/hooks/useLoadingOvertime/index.ts
var import_react13 = require("react");
var useLoadingOvertime = /* @__PURE__ */ __name(({
  isLoading,
  interval: intervalProp,
  onInterval: onIntervalProp
}) => {
  const [elapsedTime, setElapsedTime] = (0, import_react13.useState)(void 0);
  const { options } = useRefineContext();
  const { overtime } = options;
  const interval = intervalProp ?? overtime.interval;
  const onInterval = onIntervalProp ?? (overtime == null ? void 0 : overtime.onInterval);
  (0, import_react13.useEffect)(() => {
    let intervalFn;
    if (isLoading) {
      intervalFn = setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          if (prevElapsedTime === void 0) {
            return interval;
          }
          return prevElapsedTime + interval;
        });
      }, interval);
    }
    return () => {
      clearInterval(intervalFn);
      setElapsedTime(void 0);
    };
  }, [isLoading, interval]);
  (0, import_react13.useEffect)(() => {
    if (onInterval && elapsedTime) {
      onInterval(elapsedTime);
    }
  }, [elapsedTime]);
  return {
    elapsedTime
  };
}, "useLoadingOvertime");

// src/hooks/data/useList.ts
var useList = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  config,
  filters,
  hasPagination,
  pagination,
  sorters,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
} = {}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const prefferedFilters = pickNotDeprecated(filters, config == null ? void 0 : config.filters);
  const prefferedSorters = pickNotDeprecated(sorters, config == null ? void 0 : config.sort);
  const prefferedHasPagination = pickNotDeprecated(
    hasPagination,
    config == null ? void 0 : config.hasPagination
  );
  const prefferedPagination = handlePaginationParams({
    pagination,
    configPagination: config == null ? void 0 : config.pagination,
    hasPagination: prefferedHasPagination
  });
  const isServerPagination = prefferedPagination.mode === "server";
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  const notificationValues = {
    meta: combinedMeta,
    metaData: combinedMeta,
    filters: prefferedFilters,
    hasPagination: isServerPagination,
    pagination: prefferedPagination,
    sorters: prefferedSorters,
    config: {
      ...config,
      sort: prefferedSorters
    }
  };
  const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  const { getList } = dataProvider(pickedDataProvider);
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    params: {
      meta: combinedMeta,
      metaData: combinedMeta,
      pagination: prefferedPagination,
      hasPagination: isServerPagination,
      sort: prefferedSorters,
      sorters: prefferedSorters,
      filters: prefferedFilters,
      subscriptionType: "useList",
      ...liveParams
    },
    channel: `resources/${resource == null ? void 0 : resource.name}`,
    enabled: isEnabled,
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...meta,
      dataProviderName
    }
  });
  const queryResponse = (0, import_react_query11.useQuery)({
    queryKey: keys2().data(pickedDataProvider).resource(identifier ?? "").action("list").params({
      ...preferredMeta || {},
      filters: prefferedFilters,
      hasPagination: isServerPagination,
      ...isServerPagination && {
        pagination: prefferedPagination
      },
      ...sorters && {
        sorters
      },
      ...(config == null ? void 0 : config.sort) && {
        sort: config == null ? void 0 : config.sort
      }
    }).get(preferLegacyKeys),
    queryFn: ({ queryKey, pageParam, signal }) => {
      return getList({
        resource: (resource == null ? void 0 : resource.name) ?? "",
        pagination: prefferedPagination,
        hasPagination: isServerPagination,
        filters: prefferedFilters,
        sort: prefferedSorters,
        sorters: prefferedSorters,
        meta: {
          ...combinedMeta,
          queryContext: {
            queryKey,
            pageParam,
            signal
          }
        },
        metaData: {
          ...combinedMeta,
          queryContext: {
            queryKey,
            pageParam,
            signal
          }
        }
      });
    },
    ...queryOptions,
    enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : !!(resource == null ? void 0 : resource.name),
    select: (rawData) => {
      var _a;
      let data = rawData;
      const { current, mode, pageSize } = prefferedPagination;
      if (mode === "client") {
        data = {
          ...data,
          data: data.data.slice((current - 1) * pageSize, current * pageSize),
          total: data.total
        };
      }
      if (queryOptions == null ? void 0 : queryOptions.select) {
        return (_a = queryOptions == null ? void 0 : queryOptions.select) == null ? void 0 : _a.call(queryOptions, data);
      }
      return data;
    },
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, notificationValues, identifier) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, notificationValues, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${identifier}-useList-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...(0, import_devtools_internal10.getXRay)("useList", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResponse.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useList");

// src/hooks/data/useOne.ts
var import_devtools_internal11 = require("@refinedev/devtools-internal");
var import_react_query12 = require("@tanstack/react-query");
var useOne = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  id,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const { getOne } = dataProvider(pickedDataProvider);
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    channel: `resources/${resource == null ? void 0 : resource.name}`,
    params: {
      ids: id ? [id] : [],
      id,
      meta: combinedMeta,
      metaData: combinedMeta,
      subscriptionType: "useOne",
      ...liveParams
    },
    enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : typeof (resource == null ? void 0 : resource.name) !== "undefined" && typeof id !== "undefined",
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...meta,
      dataProviderName
    }
  });
  const queryResponse = (0, import_react_query12.useQuery)({
    queryKey: keys2().data(pickedDataProvider).resource(identifier ?? "").action("one").id(id ?? "").params({
      ...preferredMeta || {}
    }).get(preferLegacyKeys),
    queryFn: ({ queryKey, pageParam, signal }) => getOne({
      resource: (resource == null ? void 0 : resource.name) ?? "",
      id,
      meta: {
        ...combinedMeta,
        queryContext: {
          queryKey,
          pageParam,
          signal
        }
      },
      metaData: {
        ...combinedMeta,
        queryContext: {
          queryKey,
          pageParam,
          signal
        }
      }
    }),
    ...queryOptions,
    enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : typeof id !== "undefined",
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(
        data,
        {
          id,
          ...combinedMeta
        },
        identifier
      ) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(
        err,
        {
          id,
          ...combinedMeta
        },
        identifier
      ) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${id}-${identifier}-getOne-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...(0, import_devtools_internal11.getXRay)("useOne", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResponse.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useOne");

// src/hooks/data/useMany.ts
var import_devtools_internal12 = require("@refinedev/devtools-internal");
var import_react_query13 = require("@tanstack/react-query");
var useMany = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  ids,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  const { getMany, getOne } = dataProvider(pickedDataProvider);
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    params: {
      ids,
      meta: combinedMeta,
      metaData: combinedMeta,
      subscriptionType: "useMany",
      ...liveParams
    },
    channel: `resources/${resource.name}`,
    enabled: isEnabled,
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...meta,
      dataProviderName
    }
  });
  const queryResponse = (0, import_react_query13.useQuery)({
    queryKey: keys2().data(pickedDataProvider).resource(identifier).action("many").ids(...ids).params({
      ...preferredMeta || {}
    }).get(preferLegacyKeys),
    queryFn: ({ queryKey, pageParam, signal }) => {
      if (getMany) {
        return getMany({
          resource: resource == null ? void 0 : resource.name,
          ids,
          meta: {
            ...combinedMeta,
            queryContext: {
              queryKey,
              pageParam,
              signal
            }
          },
          metaData: {
            ...combinedMeta,
            queryContext: {
              queryKey,
              pageParam,
              signal
            }
          }
        });
      }
      return handleMultiple(
        ids.map(
          (id) => getOne({
            resource: resource == null ? void 0 : resource.name,
            id,
            meta: {
              ...combinedMeta,
              queryContext: {
                queryKey,
                pageParam,
                signal
              }
            },
            metaData: {
              ...combinedMeta,
              queryContext: {
                queryKey,
                pageParam,
                signal
              }
            }
          })
        )
      );
    },
    ...queryOptions,
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, ids, identifier) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, ids, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${ids[0]}-${identifier}-getMany-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...(0, import_devtools_internal12.getXRay)("useMany", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResponse.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useMany");

// src/hooks/data/useUpdate.ts
var import_devtools_internal13 = require("@refinedev/devtools-internal");
var import_react_query14 = require("@tanstack/react-query");

// src/contexts/undoableQueue/undoableQueueContext.tsx
var import_react14 = __toESM(require("react"));
var import_isEqual = __toESM(require("lodash/isEqual"));
var UndoableQueueContext = import_react14.default.createContext({
  notifications: [],
  notificationDispatch: () => false
});
var initialState = [];
var undoableQueueReducer = /* @__PURE__ */ __name((state, action) => {
  switch (action.type) {
    case "ADD" /* ADD */: {
      const newState = state.filter((notificationItem) => {
        return !((0, import_isEqual.default)(notificationItem.id, action.payload.id) && notificationItem.resource === action.payload.resource);
      });
      return [
        ...newState,
        {
          ...action.payload,
          isRunning: true
        }
      ];
    }
    case "REMOVE" /* REMOVE */:
      return state.filter(
        (notificationItem) => !((0, import_isEqual.default)(notificationItem.id, action.payload.id) && notificationItem.resource === action.payload.resource)
      );
    case "DECREASE_NOTIFICATION_SECOND" /* DECREASE_NOTIFICATION_SECOND */:
      return state.map((notificationItem) => {
        if ((0, import_isEqual.default)(notificationItem.id, action.payload.id) && notificationItem.resource === action.payload.resource) {
          return {
            ...notificationItem,
            seconds: action.payload.seconds - 1e3
          };
        }
        return notificationItem;
      });
    default:
      return state;
  }
}, "undoableQueueReducer");
var UndoableQueueContextProvider = /* @__PURE__ */ __name(({ children }) => {
  const [notifications, notificationDispatch] = (0, import_react14.useReducer)(
    undoableQueueReducer,
    initialState
  );
  const notificationData = { notifications, notificationDispatch };
  return /* @__PURE__ */ import_react14.default.createElement(UndoableQueueContext.Provider, { value: notificationData }, children, typeof window !== "undefined" && notifications.map((notification) => /* @__PURE__ */ import_react14.default.createElement(
    UndoableQueue,
    {
      key: `${notification.id}-${notification.resource}-queue`,
      notification
    }
  )));
}, "UndoableQueueContextProvider");

// src/hooks/data/useUpdate.ts
var useUpdate = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const { resources, select } = useResource();
  const queryClient = (0, import_react_query14.useQueryClient)();
  const dataProvider = useDataProvider();
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const publish = usePublish();
  const { log } = useLog();
  const { notificationDispatch } = useCancelNotification();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query14.useMutation)({
    mutationFn: ({
      id,
      values,
      resource: resourceName,
      mutationMode,
      undoableTimeout,
      onCancel,
      meta,
      metaData,
      dataProviderName
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      if (!(mutationModePropOrContext === "undoable")) {
        return dataProvider(
          pickDataProvider(identifier, dataProviderName, resources)
        ).update({
          resource: resource.name,
          id,
          variables: values,
          meta: combinedMeta,
          metaData: combinedMeta
        });
      }
      const updatePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            dataProvider(
              pickDataProvider(identifier, dataProviderName, resources)
            ).update({
              resource: resource.name,
              id,
              variables: values,
              meta: combinedMeta,
              metaData: combinedMeta
            }).then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return updatePromise;
    },
    onMutate: async ({
      resource: resourceName,
      id,
      mutationMode,
      values,
      dataProviderName,
      meta,
      metaData,
      optimisticUpdateMap = { list: true, many: true, detail: true }
    }) => {
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      if (mutationModePropOrContext !== "pessimistic") {
        if (optimisticUpdateMap.list) {
          queryClient.setQueriesData(
            resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.list === "function") {
                return optimisticUpdateMap.list(previous, values, id);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                var _a;
                if (((_a = record.id) == null ? void 0 : _a.toString()) === (id == null ? void 0 : id.toString())) {
                  return {
                    id,
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.many) {
          queryClient.setQueriesData(
            resourceKeys.action("many").get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.many === "function") {
                return optimisticUpdateMap.many(previous, values, id);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                var _a;
                if (((_a = record.id) == null ? void 0 : _a.toString()) === (id == null ? void 0 : id.toString())) {
                  record = {
                    id,
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.detail) {
          queryClient.setQueriesData(
            resourceKeys.action("one").id(id).params(preferredMeta ?? {}).get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.detail === "function") {
                return optimisticUpdateMap.detail(previous, values, id);
              }
              if (!previous) {
                return null;
              }
              return {
                ...previous,
                data: {
                  ...previous.data,
                  ...values
                }
              };
            }
          );
        }
      }
      return {
        previousQueries,
        queryKey
      };
    },
    onSettled: (_data, _error, {
      id,
      resource: resourceName,
      dataProviderName,
      invalidates = ["list", "many", "detail"]
    }) => {
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        ),
        invalidates,
        id
      });
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id, resource: identifier }
      });
    },
    onSuccess: (data, {
      id,
      resource: resourceName,
      successNotification,
      dataProviderName: dataProviderNameFromProp,
      values,
      meta,
      metaData
    }, context) => {
      var _a;
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, { id, values }, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${id}-${identifier}-notification`,
        description: translate("notifications.success", "Successful"),
        message: translate(
          "notifications.editSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            )
          },
          `Successfully updated ${resourceSingular}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "updated",
        payload: {
          ids: ((_a = data.data) == null ? void 0 : _a.id) ? [data.data.id] : void 0
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      let previousData;
      if (context) {
        const queryData = queryClient.getQueryData(
          context.queryKey.detail(id)
        );
        previousData = Object.keys(values || {}).reduce((acc, item) => {
          var _a2;
          acc[item] = (_a2 = queryData == null ? void 0 : queryData.data) == null ? void 0 : _a2[item];
          return acc;
        }, {});
      }
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "update",
        resource: resource.name,
        data: values,
        previousData,
        meta: {
          id,
          dataProviderName,
          ...rest
        }
      });
    },
    onError: (err, { id, resource: resourceName, errorNotification, values }, context) => {
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError == null ? void 0 : checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, { id, values }, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${id}-${identifier}-notification`,
          message: translate(
            "notifications.editError",
            {
              resource: translate(
                `${identifier}.${identifier}`,
                resourceSingular
              ),
              statusCode: err.statusCode
            },
            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
    },
    mutationKey: keys2().data().mutation("update").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal13.getXRay)("useUpdate", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useUpdate");

// src/hooks/data/useCreate.ts
var import_devtools_internal14 = require("@refinedev/devtools-internal");
var import_react_query15 = require("@tanstack/react-query");
var useCreate = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const dataProvider = useDataProvider();
  const invalidateStore = useInvalidate();
  const { resources, select } = useResource();
  const translate = useTranslate();
  const publish = usePublish();
  const { log } = useLog();
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query15.useMutation)({
    mutationFn: ({
      resource: resourceName,
      values,
      meta,
      metaData,
      dataProviderName
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      return dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      ).create({
        resource: resource.name,
        variables: values,
        meta: combinedMeta,
        metaData: combinedMeta
      });
    },
    onSuccess: (data, {
      resource: resourceName,
      successNotification: successNotificationFromProp,
      dataProviderName: dataProviderNameFromProp,
      invalidates = ["list", "many"],
      values,
      meta,
      metaData
    }) => {
      var _a, _b;
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotificationFromProp === "function" ? successNotificationFromProp(data, values, identifier) : successNotificationFromProp;
      handleNotification(notificationConfig, {
        key: `create-${identifier}-notification`,
        message: translate(
          "notifications.createSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            )
          },
          `Successfully created ${resourceSingular}`
        ),
        description: translate("notifications.success", "Success"),
        type: "success"
      });
      invalidateStore({
        resource: identifier,
        dataProviderName,
        invalidates
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "created",
        payload: {
          ids: ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.id) ? [data.data.id] : void 0
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "create",
        resource: resource.name,
        data: values,
        meta: {
          dataProviderName,
          id: ((_b = data == null ? void 0 : data.data) == null ? void 0 : _b.id) ?? void 0,
          ...rest
        }
      });
    },
    onError: (err, {
      resource: resourceName,
      errorNotification: errorNotificationFromProp,
      values
    }) => {
      checkError(err);
      const { identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const notificationConfig = typeof errorNotificationFromProp === "function" ? errorNotificationFromProp(err, values, identifier) : errorNotificationFromProp;
      handleNotification(notificationConfig, {
        key: `create-${identifier}-notification`,
        description: err.message,
        message: translate(
          "notifications.createError",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            ),
            statusCode: err.statusCode
          },
          `There was an error creating ${resourceSingular} (status code: ${err.statusCode})`
        ),
        type: "error"
      });
    },
    mutationKey: keys2().data().mutation("create").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal14.getXRay)("useCreate", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useCreate");

// src/hooks/data/useDelete.ts
var import_devtools_internal15 = require("@refinedev/devtools-internal");
var import_react_query16 = require("@tanstack/react-query");
var useDelete = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const dataProvider = useDataProvider();
  const { resources, select } = useResource();
  const queryClient = (0, import_react_query16.useQueryClient)();
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const { notificationDispatch } = useCancelNotification();
  const translate = useTranslate();
  const publish = usePublish();
  const { log } = useLog();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query16.useMutation)({
    mutationFn: ({
      id,
      mutationMode,
      undoableTimeout,
      resource: resourceName,
      onCancel,
      meta,
      metaData,
      dataProviderName,
      values
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      if (!(mutationModePropOrContext === "undoable")) {
        return dataProvider(
          pickDataProvider(identifier, dataProviderName, resources)
        ).deleteOne({
          resource: resource.name,
          id,
          meta: combinedMeta,
          metaData: combinedMeta,
          variables: values
        });
      }
      const deletePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            dataProvider(
              pickDataProvider(identifier, dataProviderName, resources)
            ).deleteOne({
              resource: resource.name,
              id,
              meta: combinedMeta,
              metaData: combinedMeta,
              variables: values
            }).then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return deletePromise;
    },
    onMutate: async ({
      id,
      resource: resourceName,
      mutationMode,
      dataProviderName,
      meta,
      metaData
    }) => {
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
      if (mutationModePropOrContext !== "pessimistic") {
        queryClient.setQueriesData(
          resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter(
              (record) => {
                var _a;
                return ((_a = record.id) == null ? void 0 : _a.toString()) !== id.toString();
              }
            );
            return {
              data,
              total: previous.total - 1
            };
          }
        );
        queryClient.setQueriesData(
          resourceKeys.action("many").get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter((record) => {
              var _a;
              return ((_a = record.id) == null ? void 0 : _a.toString()) !== (id == null ? void 0 : id.toString());
            });
            return {
              ...previous,
              data
            };
          }
        );
      }
      return {
        previousQueries,
        queryKey
      };
    },
    onSettled: (_data, _error, {
      id,
      resource: resourceName,
      dataProviderName,
      invalidates = ["list", "many"]
    }) => {
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        ),
        invalidates
      });
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id, resource: identifier }
      });
    },
    onSuccess: (_data, {
      id,
      resource: resourceName,
      successNotification,
      dataProviderName: dataProviderNameFromProp,
      meta,
      metaData
    }, context) => {
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id));
      const notificationConfig = typeof successNotification === "function" ? successNotification(_data, id, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${id}-${identifier}-notification`,
        description: translate("notifications.success", "Success"),
        message: translate(
          "notifications.deleteSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            )
          },
          `Successfully deleted a ${resourceSingular}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "deleted",
        payload: {
          ids: [id]
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "delete",
        resource: resource.name,
        meta: {
          id,
          dataProviderName,
          ...rest
        }
      });
      queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id));
    },
    onError: (err, { id, resource: resourceName, errorNotification }, context) => {
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, id, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${id}-${identifier}-notification`,
          message: translate(
            "notifications.deleteError",
            {
              resource: resourceSingular,
              statusCode: err.statusCode
            },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
    },
    mutationKey: keys2().data().mutation("delete").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal15.getXRay)("useDelete", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useDelete");

// src/hooks/data/useCreateMany.ts
var import_devtools_internal16 = require("@refinedev/devtools-internal");
var import_react_query17 = require("@tanstack/react-query");
var useCreateMany = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const dataProvider = useDataProvider();
  const { resources, select } = useResource();
  const translate = useTranslate();
  const publish = usePublish();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const { log } = useLog();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query17.useMutation)({
    mutationFn: ({
      resource: resourceName,
      values,
      meta,
      metaData,
      dataProviderName
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const selectedDataProvider = dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      );
      if (selectedDataProvider.createMany) {
        return selectedDataProvider.createMany({
          resource: resource.name,
          variables: values,
          meta: combinedMeta,
          metaData: combinedMeta
        });
      }
      return handleMultiple(
        values.map(
          (val) => selectedDataProvider.create({
            resource: resource.name,
            variables: val,
            meta: combinedMeta,
            metaData: combinedMeta
          })
        )
      );
    },
    onSuccess: (response, {
      resource: resourceName,
      successNotification,
      dataProviderName: dataProviderNameFromProp,
      invalidates = ["list", "many"],
      values,
      meta,
      metaData
    }) => {
      const { resource, identifier } = select(resourceName);
      const resourcePlural = textTransformers.plural(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotification === "function" ? successNotification(response, values, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `createMany-${identifier}-notification`,
        message: translate(
          "notifications.createSuccess",
          {
            resource: translate(`${identifier}.${identifier}`, identifier)
          },
          `Successfully created ${resourcePlural}`
        ),
        description: translate("notifications.success", "Success"),
        type: "success"
      });
      invalidateStore({
        resource: identifier,
        dataProviderName,
        invalidates
      });
      const ids = response == null ? void 0 : response.data.filter((item) => (item == null ? void 0 : item.id) !== void 0).map((item) => item.id);
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "created",
        payload: {
          ids
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "createMany",
        resource: resource.name,
        data: values,
        meta: {
          dataProviderName,
          ids,
          ...rest
        }
      });
    },
    onError: (err, { resource: resourceName, errorNotification, values }) => {
      const { identifier } = select(resourceName);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, values, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `createMany-${identifier}-notification`,
        description: err.message,
        message: translate(
          "notifications.createError",
          {
            resource: translate(`${identifier}.${identifier}`, identifier),
            statusCode: err.statusCode
          },
          `There was an error creating ${identifier} (status code: ${err.statusCode}`
        ),
        type: "error"
      });
    },
    mutationKey: keys2().data().mutation("createMany").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal16.getXRay)("useCreateMany", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useCreateMany");

// src/hooks/data/useUpdateMany.ts
var import_devtools_internal17 = require("@refinedev/devtools-internal");
var import_react_query18 = require("@tanstack/react-query");
var useUpdateMany = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const { resources, select } = useResource();
  const queryClient = (0, import_react_query18.useQueryClient)();
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const { notificationDispatch } = useCancelNotification();
  const publish = usePublish();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const { log } = useLog();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query18.useMutation)({
    mutationFn: ({
      ids,
      values,
      resource: resourceName,
      onCancel,
      mutationMode,
      undoableTimeout,
      meta,
      metaData,
      dataProviderName
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      const selectedDataProvider = dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      );
      const mutationFn = /* @__PURE__ */ __name(() => {
        if (selectedDataProvider.updateMany) {
          return selectedDataProvider.updateMany({
            resource: resource.name,
            ids,
            variables: values,
            meta: combinedMeta,
            metaData: combinedMeta
          });
        }
        return handleMultiple(
          ids.map(
            (id) => selectedDataProvider.update({
              resource: resource.name,
              id,
              variables: values,
              meta: combinedMeta,
              metaData: combinedMeta
            })
          )
        );
      }, "mutationFn");
      if (!(mutationModePropOrContext === "undoable")) {
        return mutationFn();
      }
      const updatePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            mutationFn().then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id: ids,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return updatePromise;
    },
    onMutate: async ({
      resource: resourceName,
      ids,
      values,
      mutationMode,
      dataProviderName,
      meta,
      metaData,
      optimisticUpdateMap = { list: true, many: true, detail: true }
    }) => {
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      const previousQueries = queryClient.getQueriesData(
        resourceKeys.get(preferLegacyKeys)
      );
      if (mutationModePropOrContext !== "pessimistic") {
        if (optimisticUpdateMap.list) {
          queryClient.setQueriesData(
            resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.list === "function") {
                return optimisticUpdateMap.list(previous, values, ids);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                if (record.id !== void 0 && ids.filter((id) => id !== void 0).map(String).includes(record.id.toString())) {
                  return {
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.many) {
          queryClient.setQueriesData(
            resourceKeys.action("many").get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.many === "function") {
                return optimisticUpdateMap.many(previous, values, ids);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                if (record.id !== void 0 && ids.filter((id) => id !== void 0).map(String).includes(record.id.toString())) {
                  return {
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.detail) {
          for (const id of ids) {
            queryClient.setQueriesData(
              resourceKeys.action("one").id(id).params(preferredMeta ?? {}).get(preferLegacyKeys),
              (previous) => {
                if (typeof optimisticUpdateMap.detail === "function") {
                  return optimisticUpdateMap.detail(previous, values, id);
                }
                if (!previous) {
                  return null;
                }
                const data = {
                  ...previous.data,
                  ...values
                };
                return {
                  ...previous,
                  data
                };
              }
            );
          }
        }
      }
      return {
        previousQueries,
        queryKey
      };
    },
    onSettled: (_data, _error, { ids, resource: resourceName, dataProviderName }) => {
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        invalidates: ["list", "many"],
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        )
      });
      ids.forEach(
        (id) => invalidateStore({
          resource: identifier,
          invalidates: ["detail"],
          dataProviderName: pickDataProvider(
            identifier,
            dataProviderName,
            resources
          ),
          id
        })
      );
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id: ids, resource: identifier }
      });
    },
    onSuccess: (data, {
      ids,
      resource: resourceName,
      meta,
      metaData,
      dataProviderName: dataProviderNameFromProp,
      successNotification,
      values
    }, context) => {
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, { ids, values }, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${ids}-${identifier}-notification`,
        description: translate("notifications.success", "Successful"),
        message: translate(
          "notifications.editSuccess",
          {
            resource: translate(`${identifier}.${identifier}`, identifier)
          },
          `Successfully updated ${resourceSingular}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "updated",
        payload: {
          ids: ids.map(String)
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const previousData = [];
      if (context) {
        ids.forEach((id) => {
          const queryData = queryClient.getQueryData(
            context.queryKey.detail(id)
          );
          previousData.push(
            Object.keys(values || {}).reduce((acc, item) => {
              var _a;
              acc[item] = (_a = queryData == null ? void 0 : queryData.data) == null ? void 0 : _a[item];
              return acc;
            }, {})
          );
        });
      }
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "updateMany",
        resource: resource.name,
        data: values,
        previousData,
        meta: {
          ids,
          dataProviderName,
          ...rest
        }
      });
    },
    onError: (err, { ids, resource: resourceName, errorNotification, values }, context) => {
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError == null ? void 0 : checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, { ids, values }, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${ids}-${identifier}-updateMany-error-notification`,
          message: translate(
            "notifications.editError",
            {
              resource: resourceSingular,
              statusCode: err.statusCode
            },
            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
    },
    mutationKey: keys2().data().mutation("updateMany").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal17.getXRay)("useUpdateMany", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useUpdateMany");

// src/hooks/data/useDeleteMany.ts
var import_devtools_internal18 = require("@refinedev/devtools-internal");
var import_react_query19 = require("@tanstack/react-query");
var useDeleteMany = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const dataProvider = useDataProvider();
  const { notificationDispatch } = useCancelNotification();
  const translate = useTranslate();
  const publish = usePublish();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const { log } = useLog();
  const { resources, select } = useResource();
  const queryClient = (0, import_react_query19.useQueryClient)();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query19.useMutation)({
    mutationFn: ({
      resource: resourceName,
      ids,
      mutationMode,
      undoableTimeout,
      onCancel,
      meta,
      metaData,
      dataProviderName,
      values
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      const selectedDataProvider = dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      );
      const mutationFn = /* @__PURE__ */ __name(() => {
        if (selectedDataProvider.deleteMany) {
          return selectedDataProvider.deleteMany({
            resource: resource.name,
            ids,
            meta: combinedMeta,
            metaData: combinedMeta,
            variables: values
          });
        }
        return handleMultiple(
          ids.map(
            (id) => selectedDataProvider.deleteOne({
              resource: resource.name,
              id,
              meta: combinedMeta,
              metaData: combinedMeta,
              variables: values
            })
          )
        );
      }, "mutationFn");
      if (!(mutationModePropOrContext === "undoable")) {
        return mutationFn();
      }
      const updatePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            mutationFn().then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id: ids,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return updatePromise;
    },
    onMutate: async ({
      ids,
      resource: resourceName,
      mutationMode,
      dataProviderName,
      meta,
      metaData
    }) => {
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
      if (mutationModePropOrContext !== "pessimistic") {
        queryClient.setQueriesData(
          resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter(
              (item) => item.id && !ids.map(String).includes(item.id.toString())
            );
            return {
              data,
              total: previous.total - 1
            };
          }
        );
        queryClient.setQueriesData(
          resourceKeys.action("many").get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter((record) => {
              if (record.id) {
                return !ids.map(String).includes(record.id.toString());
              }
              return false;
            });
            return {
              ...previous,
              data
            };
          }
        );
        for (const id of ids) {
          queryClient.setQueriesData(
            resourceKeys.action("one").id(id).params(preferredMeta).get(preferLegacyKeys),
            (previous) => {
              if (!previous || previous.data.id === id) {
                return null;
              }
              return {
                ...previous
              };
            }
          );
        }
      }
      return {
        previousQueries,
        queryKey
      };
    },
    // Always refetch after error or success:
    onSettled: (_data, _error, {
      resource: resourceName,
      ids,
      dataProviderName,
      invalidates = ["list", "many"]
    }) => {
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        ),
        invalidates
      });
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id: ids, resource: identifier }
      });
    },
    onSuccess: (_data, {
      ids,
      resource: resourceName,
      meta,
      metaData,
      dataProviderName: dataProviderNameFromProp,
      successNotification
    }, context) => {
      const { resource, identifier } = select(resourceName);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      ids.forEach(
        (id) => queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id))
      );
      const notificationConfig = typeof successNotification === "function" ? successNotification(_data, ids, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${ids}-${identifier}-notification`,
        description: translate("notifications.success", "Success"),
        message: translate(
          "notifications.deleteSuccess",
          {
            resource: translate(`${identifier}.${identifier}`, identifier)
          },
          `Successfully deleted ${identifier}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "deleted",
        payload: { ids },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "deleteMany",
        resource: resource.name,
        meta: {
          ids,
          dataProviderName,
          ...rest
        }
      });
      ids.forEach(
        (id) => queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id))
      );
    },
    onError: (err, { ids, resource: resourceName, errorNotification }, context) => {
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, ids, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${ids}-${identifier}-notification`,
          message: translate(
            "notifications.deleteError",
            {
              resource: resourceSingular,
              statusCode: err.statusCode
            },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
    },
    mutationKey: keys2().data().mutation("deleteMany").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...(0, import_devtools_internal18.getXRay)("useDeleteMany", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useDeleteMany");

// src/hooks/data/useApiUrl.ts
var useApiUrl = /* @__PURE__ */ __name((dataProviderName) => {
  var _a;
  const dataProvider = useDataProvider();
  const { resource } = useResource();
  const { getApiUrl } = dataProvider(
    dataProviderName ?? ((_a = pickNotDeprecated(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options)) == null ? void 0 : _a.dataProviderName)
  );
  return getApiUrl();
}, "useApiUrl");

// src/hooks/data/useCustom.ts
var import_react_query20 = require("@tanstack/react-query");
var import_devtools_internal19 = require("@refinedev/devtools-internal");
var useCustom = /* @__PURE__ */ __name(({
  url,
  method,
  config,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  dataProviderName,
  overtimeOptions
}) => {
  const dataProvider = useDataProvider();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const translate = useTranslate();
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const { custom } = dataProvider(dataProviderName);
  const combinedMeta = getMeta({ meta: preferredMeta });
  if (custom) {
    const queryResponse = (0, import_react_query20.useQuery)({
      queryKey: keys2().data(dataProviderName).mutation("custom").params({
        method,
        url,
        ...config,
        ...preferredMeta || {}
      }).get(preferLegacyKeys),
      queryFn: ({ queryKey, pageParam, signal }) => custom({
        url,
        method,
        ...config,
        meta: {
          ...combinedMeta,
          queryContext: {
            queryKey,
            pageParam,
            signal
          }
        },
        metaData: {
          ...combinedMeta,
          queryContext: {
            queryKey,
            pageParam,
            signal
          }
        }
      }),
      ...queryOptions,
      onSuccess: (data) => {
        var _a;
        (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
        const notificationConfig = typeof successNotification === "function" ? successNotification(data, {
          ...config,
          ...combinedMeta
        }) : successNotification;
        handleNotification(notificationConfig);
      },
      onError: (err) => {
        var _a;
        checkError(err);
        (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, {
          ...config,
          ...combinedMeta
        }) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${method}-notification`,
          message: translate(
            "notifications.error",
            { statusCode: err.statusCode },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      },
      meta: {
        ...queryOptions == null ? void 0 : queryOptions.meta,
        ...(0, import_devtools_internal19.getXRay)("useCustom", preferLegacyKeys)
      }
    });
    const { elapsedTime } = useLoadingOvertime({
      isLoading: queryResponse.isFetching,
      interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
      onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
    });
    return { ...queryResponse, overtime: { elapsedTime } };
  }
  throw Error("Not implemented custom on data provider.");
}, "useCustom");

// src/hooks/data/useCustomMutation.ts
var import_react_query21 = require("@tanstack/react-query");
var import_devtools_internal20 = require("@refinedev/devtools-internal");
var useCustomMutation = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = (0, import_react_query21.useMutation)(
    ({
      url,
      method,
      values,
      meta,
      metaData,
      dataProviderName,
      config
    }) => {
      const combinedMeta = getMeta({
        meta: pickNotDeprecated(meta, metaData)
      });
      const { custom } = dataProvider(dataProviderName);
      if (custom) {
        return custom({
          url,
          method,
          payload: values,
          meta: combinedMeta,
          metaData: combinedMeta,
          headers: { ...config == null ? void 0 : config.headers }
        });
      }
      throw Error("Not implemented custom on data provider.");
    },
    {
      onSuccess: (data, {
        successNotification: successNotificationFromProp,
        config,
        meta,
        metaData
      }) => {
        const notificationConfig = typeof successNotificationFromProp === "function" ? successNotificationFromProp(data, {
          ...config,
          ...pickNotDeprecated(meta, metaData) || {}
        }) : successNotificationFromProp;
        handleNotification(notificationConfig);
      },
      onError: (err, {
        errorNotification: errorNotificationFromProp,
        method,
        config,
        meta,
        metaData
      }) => {
        checkError(err);
        const notificationConfig = typeof errorNotificationFromProp === "function" ? errorNotificationFromProp(err, {
          ...config,
          ...pickNotDeprecated(meta, metaData) || {}
        }) : errorNotificationFromProp;
        handleNotification(notificationConfig, {
          key: `${method}-notification`,
          message: translate(
            "notifications.error",
            { statusCode: err.statusCode },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      },
      mutationKey: keys2().data().mutation("customMutation").get(preferLegacyKeys),
      ...mutationOptions,
      meta: {
        ...mutationOptions == null ? void 0 : mutationOptions.meta,
        ...(0, import_devtools_internal20.getXRay)("useCustomMutation", preferLegacyKeys)
      }
    }
  );
  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useCustomMutation");

// src/hooks/data/useDataProvider.tsx
var import_react16 = require("react");

// src/contexts/data/index.tsx
var import_react15 = __toESM(require("react"));
var defaultDataProvider = /* @__PURE__ */ __name(() => {
  return {};
}, "defaultDataProvider");
var DataContext = import_react15.default.createContext(defaultDataProvider());
var DataContextProvider = /* @__PURE__ */ __name(({ children, ...rest }) => {
  let dataProviders;
  if (!rest.getList || !rest.getOne) {
    dataProviders = rest;
  } else {
    dataProviders = {
      default: rest
    };
  }
  return /* @__PURE__ */ import_react15.default.createElement(DataContext.Provider, { value: dataProviders }, children);
}, "DataContextProvider");

// src/hooks/data/useDataProvider.tsx
var useDataProvider = /* @__PURE__ */ __name(() => {
  const context = (0, import_react16.useContext)(DataContext);
  const handleDataProvider = (0, import_react16.useCallback)(
    (dataProviderName) => {
      if (dataProviderName) {
        const dataProvider = context == null ? void 0 : context[dataProviderName];
        if (!dataProvider) {
          throw new Error(`"${dataProviderName}" Data provider not found`);
        }
        return context[dataProviderName];
      }
      if (context.default) {
        return context.default;
      }
      throw new Error(
        `There is no "default" data provider. Please pass dataProviderName.`
      );
    },
    [context]
  );
  return handleDataProvider;
}, "useDataProvider");

// src/hooks/data/useInfiniteList.ts
var import_devtools_internal21 = require("@refinedev/devtools-internal");
var import_react_query22 = require("@tanstack/react-query");
var useInfiniteList = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  config,
  filters,
  hasPagination,
  pagination,
  sorters,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const prefferedFilters = pickNotDeprecated(filters, config == null ? void 0 : config.filters);
  const prefferedSorters = pickNotDeprecated(sorters, config == null ? void 0 : config.sort);
  const prefferedHasPagination = pickNotDeprecated(
    hasPagination,
    config == null ? void 0 : config.hasPagination
  );
  const prefferedPagination = handlePaginationParams({
    pagination,
    configPagination: config == null ? void 0 : config.pagination,
    hasPagination: prefferedHasPagination
  });
  const isServerPagination = prefferedPagination.mode === "server";
  const notificationValues = {
    meta: preferredMeta,
    metaData: preferredMeta,
    filters: prefferedFilters,
    hasPagination: isServerPagination,
    pagination: prefferedPagination,
    sorters: prefferedSorters,
    config: {
      ...config,
      sort: prefferedSorters
    }
  };
  const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  const { getList } = dataProvider(pickedDataProvider);
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    params: {
      meta: combinedMeta,
      metaData: combinedMeta,
      pagination: prefferedPagination,
      hasPagination: isServerPagination,
      sort: prefferedSorters,
      sorters: prefferedSorters,
      filters: prefferedFilters,
      subscriptionType: "useList",
      ...liveParams
    },
    channel: `resources/${resource.name}`,
    enabled: isEnabled,
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...combinedMeta,
      dataProviderName
    }
  });
  const queryResponse = (0, import_react_query22.useInfiniteQuery)({
    queryKey: keys2().data(pickedDataProvider).resource(identifier).action("infinite").params({
      ...preferredMeta || {},
      filters: prefferedFilters,
      hasPagination: isServerPagination,
      ...isServerPagination && {
        pagination: prefferedPagination
      },
      ...sorters && {
        sorters
      },
      ...(config == null ? void 0 : config.sort) && {
        sort: config == null ? void 0 : config.sort
      }
    }).get(preferLegacyKeys),
    queryFn: ({ queryKey, pageParam, signal }) => {
      const paginationProperties = {
        ...prefferedPagination,
        current: pageParam
      };
      return getList({
        resource: resource.name,
        pagination: paginationProperties,
        hasPagination: isServerPagination,
        filters: prefferedFilters,
        sort: prefferedSorters,
        sorters: prefferedSorters,
        meta: {
          ...combinedMeta,
          queryContext: {
            queryKey,
            pageParam,
            signal
          }
        },
        metaData: {
          ...combinedMeta,
          queryContext: {
            queryKey,
            pageParam,
            signal
          }
        }
      }).then(({ data, total, ...rest }) => {
        return {
          data,
          total,
          pagination: paginationProperties,
          ...rest
        };
      });
    },
    getNextPageParam: (lastPage) => getNextPageParam(lastPage),
    getPreviousPageParam: (lastPage) => getPreviousPageParam(lastPage),
    ...queryOptions,
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, notificationValues, identifier) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, notificationValues, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${identifier}-useInfiniteList-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...(0, import_devtools_internal21.getXRay)("useInfiniteList", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResponse.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useInfiniteList");

// src/contexts/live/index.tsx
var import_react17 = __toESM(require("react"));
var LiveContext = import_react17.default.createContext(void 0);
var LiveContextProvider = /* @__PURE__ */ __name(({
  liveProvider,
  children
}) => {
  return /* @__PURE__ */ import_react17.default.createElement(LiveContext.Provider, { value: liveProvider }, children);
}, "LiveContextProvider");

// src/hooks/invalidate/index.tsx
var import_react27 = require("react");
var import_react_query23 = require("@tanstack/react-query");

// src/hooks/resource/useResource/index.ts
var import_react25 = require("react");

// src/contexts/resource/index.tsx
var import_react20 = __toESM(require("react"));

// src/hooks/deepMemo/index.tsx
var import_react19 = require("react");

// src/hooks/memoized/index.tsx
var import_react18 = require("react");
var import_isEqual2 = __toESM(require("lodash/isEqual"));
var useMemoized = /* @__PURE__ */ __name((value) => {
  const ref = (0, import_react18.useRef)(value);
  if (!(0, import_isEqual2.default)(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}, "useMemoized");

// src/hooks/deepMemo/index.tsx
var useDeepMemo = /* @__PURE__ */ __name((fn, dependencies) => {
  const memoizedDependencies = useMemoized(dependencies);
  const value = (0, import_react19.useMemo)(fn, memoizedDependencies);
  return value;
}, "useDeepMemo");

// src/contexts/resource/index.tsx
var ResourceContext = import_react20.default.createContext({
  resources: []
});
var ResourceContextProvider = /* @__PURE__ */ __name(({ resources: providedResources, children }) => {
  const resources = useDeepMemo(() => {
    return legacyResourceTransform(providedResources ?? []);
  }, [providedResources]);
  return /* @__PURE__ */ import_react20.default.createElement(ResourceContext.Provider, { value: { resources } }, children);
}, "ResourceContextProvider");

// src/contexts/router-picker/index.tsx
var import_react21 = __toESM(require("react"));
var RouterPickerContext = import_react21.default.createContext("new");
var RouterPickerProvider = RouterPickerContext.Provider;
var useRouterType = /* @__PURE__ */ __name(() => {
  const value = import_react21.default.useContext(RouterPickerContext);
  return value;
}, "useRouterType");

// src/hooks/router/use-parsed/index.tsx
var import_react24 = __toESM(require("react"));

// src/contexts/router/index.tsx
var import_react22 = __toESM(require("react"));
var defaultBindings = {};
var RouterBindingsContext = (0, import_react22.createContext)(defaultBindings);
var RouterBindingsProvider = /* @__PURE__ */ __name(({ children, router }) => {
  return /* @__PURE__ */ import_react22.default.createElement(RouterBindingsContext.Provider, { value: router ?? defaultBindings }, children);
}, "RouterBindingsProvider");

// src/hooks/router/use-parse/index.tsx
var import_react23 = __toESM(require("react"));
var useParse = /* @__PURE__ */ __name(() => {
  const bindings = (0, import_react23.useContext)(RouterBindingsContext);
  const useParse2 = import_react23.default.useMemo(
    () => (bindings == null ? void 0 : bindings.parse) ?? (() => () => {
      return {};
    }),
    [bindings == null ? void 0 : bindings.parse]
  );
  const parse2 = useParse2();
  return parse2;
}, "useParse");

// src/hooks/router/use-parsed/index.tsx
var useParsed = /* @__PURE__ */ __name(() => {
  const parse2 = useParse();
  const parsed = import_react24.default.useMemo(() => parse2(), [parse2]);
  return parsed;
}, "useParsed");

// src/hooks/resource/useResource/index.ts
function useResource(args) {
  const { resources } = (0, import_react25.useContext)(ResourceContext);
  const routerType = useRouterType();
  const params = useParsed();
  const oldProps = {
    resourceName: args && typeof args !== "string" ? args.resourceName : args,
    resourceNameOrRouteName: args && typeof args !== "string" ? args.resourceNameOrRouteName : args,
    recordItemId: args && typeof args !== "string" ? args.recordItemId : void 0
  };
  const select = /* @__PURE__ */ __name((resourceName, force = true) => {
    const isLegacy = routerType === "legacy";
    const pickedResource = pickResource(resourceName, resources, isLegacy);
    if (pickedResource) {
      return {
        resource: pickedResource,
        identifier: pickedResource.identifier ?? pickedResource.name
      };
    }
    if (force) {
      const resource2 = {
        name: resourceName,
        identifier: resourceName
      };
      const identifier2 = resource2.identifier ?? resource2.name;
      return {
        resource: resource2,
        identifier: identifier2
      };
    }
    return void 0;
  }, "select");
  const resourceWithRoute = useResourceWithRoute();
  const { useParams } = useRouterContext();
  const legacyParams = useParams();
  if (routerType === "legacy") {
    const resourceKeyToCheck = oldProps.resourceNameOrRouteName ? oldProps.resourceNameOrRouteName : legacyParams.resource;
    const legacyResource = resourceKeyToCheck ? resourceWithRoute(resourceKeyToCheck) : void 0;
    const legacyId = (oldProps == null ? void 0 : oldProps.recordItemId) ?? legacyParams.id;
    const legacyAction = legacyParams.action;
    const legacyResourceName = (oldProps == null ? void 0 : oldProps.resourceName) ?? (legacyResource == null ? void 0 : legacyResource.name);
    const legacyIdentifier = (legacyResource == null ? void 0 : legacyResource.identifier) ?? (legacyResource == null ? void 0 : legacyResource.name);
    return {
      resources,
      resource: legacyResource,
      resourceName: legacyResourceName,
      id: legacyId,
      action: legacyAction,
      select,
      identifier: legacyIdentifier
    };
  }
  let resource = void 0;
  const identifier = typeof args === "string" ? args : oldProps == null ? void 0 : oldProps.resourceNameOrRouteName;
  if (identifier) {
    const pickedFromProps = pickResource(identifier, resources);
    if (pickedFromProps) {
      resource = pickedFromProps;
    } else {
      resource = {
        name: identifier
      };
    }
  } else if (params == null ? void 0 : params.resource) {
    resource = params.resource;
  }
  return {
    resources,
    resource,
    resourceName: resource == null ? void 0 : resource.name,
    id: params.id,
    action: params.action,
    select,
    identifier: (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name)
  };
}
__name(useResource, "useResource");

// src/hooks/resource/useResourceWithRoute/index.ts
var import_react26 = require("react");
var useResourceWithRoute = /* @__PURE__ */ __name(() => {
  const { resources } = (0, import_react26.useContext)(ResourceContext);
  const resourceWithRoute = (0, import_react26.useCallback)(
    (route) => {
      const picked = pickResource(route, resources, true);
      if (picked) {
        return picked;
      }
      return { name: route, route };
    },
    [resources]
  );
  return resourceWithRoute;
}, "useResourceWithRoute");

// src/hooks/invalidate/index.tsx
var useInvalidate = /* @__PURE__ */ __name(() => {
  const { resources } = useResource();
  const queryClient = (0, import_react_query23.useQueryClient)();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const invalidate = (0, import_react27.useCallback)(
    async ({
      resource,
      dataProviderName,
      invalidates,
      id,
      invalidationFilters = { type: "all", refetchType: "active" },
      invalidationOptions = { cancelRefetch: false }
    }) => {
      if (invalidates === false) {
        return;
      }
      const dp = pickDataProvider(resource, dataProviderName, resources);
      const queryKey = keys2().data(dp).resource(resource ?? "");
      await Promise.all(
        invalidates.map((key) => {
          switch (key) {
            case "all":
              return queryClient.invalidateQueries(
                keys2().data(dp).get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "list":
              return queryClient.invalidateQueries(
                queryKey.action("list").get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "many":
              return queryClient.invalidateQueries(
                queryKey.action("many").get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "resourceAll":
              return queryClient.invalidateQueries(
                queryKey.get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "detail":
              return queryClient.invalidateQueries(
                queryKey.action("one").id(id || "").get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            default:
              return;
          }
        })
      );
      return;
    },
    []
  );
  return invalidate;
}, "useInvalidate");

// src/hooks/live/useResourceSubscription/index.ts
var import_react28 = require("react");
var useResourceSubscription = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  params,
  channel,
  types,
  enabled = true,
  liveMode: liveModeFromProp,
  onLiveEvent,
  dataProviderName: dataProviderNameFromProps,
  meta
}) => {
  var _a;
  const { resource, identifier } = useResource(resourceFromProp);
  const liveDataContext = (0, import_react28.useContext)(LiveContext);
  const {
    liveMode: liveModeFromContext,
    onLiveEvent: onLiveEventContextCallback
  } = (0, import_react28.useContext)(RefineContext);
  const liveMode = liveModeFromProp ?? liveModeFromContext;
  const invalidate = useInvalidate();
  const dataProviderName = dataProviderNameFromProps ?? (meta == null ? void 0 : meta.dataProviderName) ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.dataProviderName);
  (0, import_react28.useEffect)(() => {
    let subscription;
    const callback = /* @__PURE__ */ __name((event) => {
      if (liveMode === "auto") {
        invalidate({
          resource: identifier,
          dataProviderName,
          invalidates: ["resourceAll"],
          invalidationFilters: {
            type: "active",
            refetchType: "active"
          },
          invalidationOptions: { cancelRefetch: false }
        });
      }
      onLiveEvent == null ? void 0 : onLiveEvent(event);
      onLiveEventContextCallback == null ? void 0 : onLiveEventContextCallback(event);
    }, "callback");
    if (liveMode && liveMode !== "off" && enabled) {
      subscription = liveDataContext == null ? void 0 : liveDataContext.subscribe({
        channel,
        params: {
          resource: resource == null ? void 0 : resource.name,
          ...params
        },
        types,
        callback,
        dataProviderName,
        meta: {
          ...meta,
          dataProviderName
        }
      });
    }
    return () => {
      if (subscription) {
        liveDataContext == null ? void 0 : liveDataContext.unsubscribe(subscription);
      }
    };
  }, [enabled]);
}, "useResourceSubscription");

// src/hooks/live/useLiveMode/index.ts
var import_react29 = require("react");
var useLiveMode = /* @__PURE__ */ __name((liveMode) => {
  const { liveMode: liveModeFromContext } = (0, import_react29.useContext)(RefineContext);
  return liveMode ?? liveModeFromContext;
}, "useLiveMode");

// src/hooks/live/useSubscription/index.ts
var import_react30 = require("react");
var useSubscription = /* @__PURE__ */ __name(({
  params,
  channel,
  types = ["*"],
  enabled = true,
  onLiveEvent,
  dataProviderName = "default",
  meta
}) => {
  const liveDataContext = (0, import_react30.useContext)(LiveContext);
  (0, import_react30.useEffect)(() => {
    let subscription;
    if (enabled) {
      subscription = liveDataContext == null ? void 0 : liveDataContext.subscribe({
        channel,
        params,
        types,
        callback: onLiveEvent,
        dataProviderName,
        meta: {
          ...meta,
          dataProviderName
        }
      });
    }
    return () => {
      if (subscription) {
        liveDataContext == null ? void 0 : liveDataContext.unsubscribe(subscription);
      }
    };
  }, [enabled]);
}, "useSubscription");

// src/hooks/live/usePublish/index.ts
var import_react31 = require("react");
var usePublish = /* @__PURE__ */ __name(() => {
  const liveContext = (0, import_react31.useContext)(LiveContext);
  return liveContext == null ? void 0 : liveContext.publish;
}, "usePublish");

// src/hooks/notification/useCancelNotification/index.tsx
var import_react32 = require("react");
var useCancelNotification = /* @__PURE__ */ __name(() => {
  const { notifications, notificationDispatch } = (0, import_react32.useContext)(UndoableQueueContext);
  return { notifications, notificationDispatch };
}, "useCancelNotification");

// src/hooks/notification/useNotification/index.ts
var import_react34 = require("react");

// src/contexts/notification/index.tsx
var import_react33 = __toESM(require("react"));
var NotificationContext = (0, import_react33.createContext)({});
var NotificationContextProvider = /* @__PURE__ */ __name(({ open, close, children }) => {
  return /* @__PURE__ */ import_react33.default.createElement(NotificationContext.Provider, { value: { open, close } }, children);
}, "NotificationContextProvider");

// src/hooks/notification/useNotification/index.ts
var useNotification = /* @__PURE__ */ __name(() => {
  const { open, close } = (0, import_react34.useContext)(NotificationContext);
  return { open, close };
}, "useNotification");

// src/hooks/notification/useHandleNotification/index.ts
var import_react35 = require("react");
var useHandleNotification = /* @__PURE__ */ __name(() => {
  const { open } = useNotification();
  const handleNotification = (0, import_react35.useCallback)(
    (notification, fallbackNotification) => {
      if (notification !== false) {
        if (notification) {
          open == null ? void 0 : open(notification);
        } else if (fallbackNotification) {
          open == null ? void 0 : open(fallbackNotification);
        }
      }
    },
    []
  );
  return handleNotification;
}, "useHandleNotification");

// src/hooks/translate/useSetLocale.ts
var import_react37 = require("react");

// src/contexts/translation/index.tsx
var import_react36 = __toESM(require("react"));
var TranslationContext = import_react36.default.createContext({});
var TranslationContextProvider = /* @__PURE__ */ __name(({ children, i18nProvider }) => {
  return /* @__PURE__ */ import_react36.default.createElement(
    TranslationContext.Provider,
    {
      value: {
        i18nProvider
      }
    },
    children
  );
}, "TranslationContextProvider");

// src/hooks/translate/useSetLocale.ts
var useSetLocale = /* @__PURE__ */ __name(() => {
  const { i18nProvider } = (0, import_react37.useContext)(TranslationContext);
  return (0, import_react37.useCallback)((lang) => i18nProvider == null ? void 0 : i18nProvider.changeLocale(lang), []);
}, "useSetLocale");

// src/hooks/translate/useTranslate.ts
var import_react38 = require("react");
var useTranslate = /* @__PURE__ */ __name(() => {
  const { i18nProvider } = (0, import_react38.useContext)(TranslationContext);
  const fn = (0, import_react38.useMemo)(() => {
    function translate(key, options, defaultMessage) {
      return (i18nProvider == null ? void 0 : i18nProvider.translate(key, options, defaultMessage)) ?? defaultMessage ?? (typeof options === "string" && typeof defaultMessage === "undefined" ? options : key);
    }
    __name(translate, "translate");
    return translate;
  }, [i18nProvider]);
  return fn;
}, "useTranslate");

// src/hooks/translate/useGetLocale.ts
var import_react39 = require("react");
var useGetLocale = /* @__PURE__ */ __name(() => {
  const { i18nProvider } = (0, import_react39.useContext)(TranslationContext);
  return (0, import_react39.useCallback)(() => i18nProvider == null ? void 0 : i18nProvider.getLocale(), []);
}, "useGetLocale");

// src/hooks/export/index.ts
var import_react40 = require("react");
var import_papaparse = require("papaparse");
var import_warn_once2 = __toESM(require("warn-once"));
var useExport = /* @__PURE__ */ __name(({
  resourceName,
  resource: resourceFromProps,
  sorter,
  sorters,
  filters,
  maxItemCount,
  pageSize = 20,
  mapData = /* @__PURE__ */ __name((item) => item, "mapData"),
  exportOptions,
  unparseConfig,
  meta,
  metaData,
  dataProviderName,
  onError,
  download
} = {}) => {
  const [isLoading, setIsLoading] = (0, import_react40.useState)(false);
  const dataProvider = useDataProvider();
  const getMeta = useMeta();
  const { resource, resources, identifier } = useResource(
    pickNotDeprecated(resourceFromProps, resourceName)
  );
  const getFriendlyName = useUserFriendlyName();
  const filename = `${getFriendlyName(
    identifier,
    "plural"
  )}-${(/* @__PURE__ */ new Date()).toLocaleString()}`;
  const { getList } = dataProvider(
    pickDataProvider(identifier, dataProviderName, resources)
  );
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  const triggerExport = /* @__PURE__ */ __name(async () => {
    setIsLoading(true);
    let rawData = [];
    let current = 1;
    let preparingData = true;
    while (preparingData) {
      try {
        const { data, total } = await getList({
          resource: (resource == null ? void 0 : resource.name) ?? "",
          filters,
          sort: pickNotDeprecated(sorters, sorter),
          sorters: pickNotDeprecated(sorters, sorter),
          pagination: {
            current,
            pageSize,
            mode: "server"
          },
          meta: combinedMeta,
          metaData: combinedMeta
        });
        current++;
        rawData.push(...data);
        if (maxItemCount && rawData.length >= maxItemCount) {
          rawData = rawData.slice(0, maxItemCount);
          preparingData = false;
        }
        if (total === rawData.length) {
          preparingData = false;
        }
      } catch (error) {
        setIsLoading(false);
        preparingData = false;
        onError == null ? void 0 : onError(error);
        return;
      }
    }
    const hasUnparseConfig = typeof unparseConfig !== "undefined" && unparseConfig !== null;
    (0, import_warn_once2.default)(
      hasUnparseConfig && typeof exportOptions !== "undefined" && exportOptions !== null,
      `[useExport]: resource: "${identifier}" 

Both \`unparseConfig\` and \`exportOptions\` are set, \`unparseConfig\` will take precedence`
    );
    const options = {
      filename,
      useKeysAsHeaders: true,
      useBom: true,
      // original default
      title: "My Generated Report",
      // original default
      quoteStrings: '"',
      // original default
      ...exportOptions
    };
    (0, import_warn_once2.default)(
      (exportOptions == null ? void 0 : exportOptions.decimalSeparator) !== void 0,
      `[useExport]: resource: "${identifier}" 

Use of \`decimalSeparator\` no longer supported, please use \`mapData\` instead.

See https://refine.dev/docs/api-reference/core/hooks/import-export/useExport/`
    );
    if (!hasUnparseConfig) {
      unparseConfig = {
        // useKeysAsHeaders takes priority over options.headers
        columns: options.useKeysAsHeaders ? void 0 : options.headers,
        delimiter: options.fieldSeparator,
        header: options.showLabels || options.useKeysAsHeaders,
        quoteChar: options.quoteStrings,
        quotes: true
      };
    } else {
      unparseConfig = {
        // Set to force quote for better compatibility
        quotes: true,
        ...unparseConfig
      };
    }
    let csv = (0, import_papaparse.unparse)(rawData.map(mapData), unparseConfig);
    if (options.showTitle) {
      csv = `${options.title}\r

${csv}`;
    }
    if (typeof window !== "undefined" && csv.length > 0 && (download ?? true)) {
      const fileExtension = options.useTextFile ? ".txt" : ".csv";
      const fileType = `text/${options.useTextFile ? "plain" : "csv"};charset=utf8;`;
      const downloadFilename = `${(options.filename ?? "download").replace(
        / /g,
        "_"
      )}${fileExtension}`;
      downloadInBrowser(
        downloadFilename,
        `${(options == null ? void 0 : options.useBom) ? "\uFEFF" : ""}${csv}`,
        fileType
      );
    }
    setIsLoading(false);
    return csv;
  }, "triggerExport");
  return {
    isLoading,
    triggerExport
  };
}, "useExport");

// src/hooks/form/useForm.ts
var import_react41 = __toESM(require("react"));
var import_warn_once3 = __toESM(require("warn-once"));
var import_debounce = __toESM(require("lodash/debounce"));
var useForm = /* @__PURE__ */ __name(({
  resource: resourceFromProps,
  action: actionFromProps,
  id: idFromProps,
  onMutationSuccess,
  onMutationError,
  redirect: redirectFromProps,
  successNotification,
  errorNotification,
  meta,
  metaData,
  queryMeta,
  mutationMeta,
  mutationMode: mutationModeProp,
  liveMode,
  onLiveEvent,
  liveParams,
  undoableTimeout,
  dataProviderName,
  invalidates,
  queryOptions,
  createMutationOptions,
  updateMutationOptions,
  overtimeOptions,
  autoSave,
  optimisticUpdateMap
} = {}) => {
  const invalidate = useInvalidate();
  const { options } = useRefineContext();
  const getMeta = useMeta();
  const {
    resource,
    id: idFromRoute,
    action: actionFromRoute,
    identifier
  } = useResource(resourceFromProps);
  const { identifier: inferredIdentifier } = useResource();
  const getDefaultId = /* @__PURE__ */ __name(() => {
    const idFromPropsOrRoute = idFromProps ?? idFromRoute;
    if (resourceFromProps && resourceFromProps !== inferredIdentifier) {
      return idFromProps;
    }
    return idFromPropsOrRoute;
  }, "getDefaultId");
  const defaultId = getDefaultId();
  const [id, setId] = import_react41.default.useState(defaultId);
  import_react41.default.useEffect(() => {
    setId(defaultId);
  }, [defaultId]);
  const getAction = /* @__PURE__ */ __name(() => {
    if (actionFromProps)
      return actionFromProps;
    if (actionFromRoute === "edit" || actionFromRoute === "clone")
      return actionFromRoute;
    return "create";
  }, "getAction");
  const action = getAction();
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  const { mutationMode: mutationModeContext } = useMutationMode();
  const mutationMode = mutationModeProp ?? mutationModeContext;
  const isCreate = action === "create";
  const isEdit = action === "edit";
  const isClone = action === "clone";
  (0, import_warn_once3.default)(
    (isClone || isEdit) && Boolean(resourceFromProps) && !idFromProps && (queryOptions == null ? void 0 : queryOptions.enabled) !== false,
    `[useForm]: action: "${action}", resource: "${identifier}", id: ${id} 

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/api-reference/core/hooks/useForm/#resource`
  );
  const designatedRedirectAction = redirectPage({
    redirectFromProps,
    action,
    redirectOptions: options.redirect
  });
  const enableQuery = id !== void 0 && (isEdit || isClone);
  const queryResult = useOne({
    resource: identifier,
    id: id ?? "",
    queryOptions: {
      enabled: enableQuery,
      ...queryOptions
    },
    liveMode,
    onLiveEvent,
    liveParams,
    meta: { ...combinedMeta, ...queryMeta },
    metaData: { ...combinedMeta, ...queryMeta },
    dataProviderName
  });
  const { isFetching: isFetchingQuery } = queryResult;
  const mutationResultCreate = useCreate(
    {
      mutationOptions: createMutationOptions
    }
  );
  const { mutate: mutateCreate, isLoading: isLoadingCreate } = mutationResultCreate;
  const mutationResultUpdate = useUpdate(
    {
      mutationOptions: updateMutationOptions
    }
  );
  const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = mutationResultUpdate;
  const autoSaveMutation = useUpdate({});
  const { setWarnWhen } = useWarnAboutChange();
  const handleSubmitWithRedirect = useRedirectionAfterSubmission();
  const onFinishCreate = /* @__PURE__ */ __name(async (values) => {
    setWarnWhen(false);
    const onSuccess = /* @__PURE__ */ __name((id2) => {
      handleSubmitWithRedirect({
        redirect: designatedRedirectAction,
        resource,
        id: id2,
        meta: pickNotDeprecated(meta, metaData)
      });
    }, "onSuccess");
    if (mutationMode !== "pessimistic") {
      setTimeout(() => {
        onSuccess();
      });
    }
    return new Promise((resolve, reject) => {
      if (mutationMode !== "pessimistic") {
        resolve();
      }
      if (!resource)
        return;
      return mutateCreate(
        {
          values,
          resource: identifier ?? resource.name,
          successNotification,
          errorNotification,
          meta: { ...combinedMeta, ...mutationMeta },
          metaData: { ...combinedMeta, ...mutationMeta },
          dataProviderName,
          invalidates
        },
        {
          onSuccess: (data, _, context) => {
            var _a;
            if (onMutationSuccess) {
              onMutationSuccess(data, values, context);
            }
            const responseId = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.id;
            onSuccess(responseId);
            resolve(data);
          },
          onError: (error, _, context) => {
            if (onMutationError) {
              return onMutationError(error, values, context);
            }
            reject();
          }
        }
      );
    });
  }, "onFinishCreate");
  import_react41.default.useEffect(() => {
    return () => {
      if ((autoSave == null ? void 0 : autoSave.invalidateOnUnmount) && autoSaveMutation.status === "success") {
        invalidate({
          id,
          invalidates: invalidates || ["list", "many", "detail"],
          dataProviderName,
          resource: identifier
        });
      }
    };
  }, [autoSave == null ? void 0 : autoSave.invalidateOnUnmount, autoSaveMutation.status]);
  const onFinishAutoSaveMutation = /* @__PURE__ */ __name((values) => {
    if (!resource || !isEdit)
      return;
    const variables = {
      id: id ?? "",
      values,
      resource: identifier ?? resource.name,
      successNotification: false,
      errorNotification: false,
      meta: { ...combinedMeta, ...mutationMeta },
      metaData: { ...combinedMeta, ...mutationMeta },
      dataProviderName,
      invalidates: [],
      mutationMode: "pessimistic"
    };
    return autoSaveMutation.mutate(variables, {
      onSuccess: (data, _, context) => {
        if (onMutationSuccess) {
          onMutationSuccess(data, values, context, true);
        }
      },
      onError: (error, _, context) => {
        if (onMutationError) {
          return onMutationError(error, values, context, true);
        }
      }
    });
  }, "onFinishAutoSaveMutation");
  const onFinishAutoSave = (0, import_debounce.default)((allValues) => {
    return onFinishAutoSaveMutation(allValues);
  }, (autoSave == null ? void 0 : autoSave.debounce) || 1e3);
  const onFinishUpdate = /* @__PURE__ */ __name(async (values) => {
    setWarnWhen(false);
    if (!resource)
      return;
    const variables = {
      id: id ?? "",
      values,
      resource: identifier ?? resource.name,
      mutationMode,
      undoableTimeout,
      successNotification,
      errorNotification,
      meta: { ...combinedMeta, ...mutationMeta },
      metaData: { ...combinedMeta, ...mutationMeta },
      dataProviderName,
      invalidates,
      optimisticUpdateMap
    };
    const onSuccess = /* @__PURE__ */ __name(() => {
      handleSubmitWithRedirect({
        redirect: designatedRedirectAction,
        resource,
        id,
        meta: pickNotDeprecated(meta, metaData)
      });
    }, "onSuccess");
    if (mutationMode !== "pessimistic") {
      setTimeout(() => {
        onSuccess();
      });
    }
    return new Promise((resolve, reject) => {
      if (mutationMode !== "pessimistic") {
        resolve();
      }
      return setTimeout(() => {
        mutateUpdate(variables, {
          onSuccess: (data, _, context) => {
            if (onMutationSuccess) {
              onMutationSuccess(data, values, context);
            }
            if (mutationMode === "pessimistic") {
              onSuccess();
            }
            resolve(data);
          },
          onError: (error, _, context) => {
            if (onMutationError) {
              return onMutationError(error, values, context);
            }
            reject();
          }
        });
      });
    });
  }, "onFinishUpdate");
  const createResult = {
    formLoading: isFetchingQuery || isLoadingCreate,
    mutationResult: mutationResultCreate,
    onFinish: onFinishCreate
  };
  const editResult = {
    formLoading: isFetchingQuery || isLoadingUpdate,
    mutationResult: mutationResultUpdate,
    onFinish: onFinishUpdate
  };
  const result = isCreate || isClone ? createResult : editResult;
  const { elapsedTime } = useLoadingOvertime({
    isLoading: result.mutationResult.isLoading || queryResult.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return {
    ...result,
    queryResult,
    onFinishAutoSave,
    autoSaveProps: {
      status: autoSaveMutation.status,
      data: autoSaveMutation.data,
      error: autoSaveMutation.error
    },
    id,
    setId,
    redirect: (redirect, idFromFunction) => {
      handleSubmitWithRedirect({
        redirect: redirect !== void 0 ? redirect : isEdit ? "list" : "edit",
        resource,
        id: idFromFunction ?? id,
        meta: pickNotDeprecated(meta, metaData)
      });
    },
    overtime: {
      elapsedTime
    }
  };
}, "useForm");

// src/hooks/redirection/index.ts
var import_react42 = require("react");
var useRedirectionAfterSubmission = /* @__PURE__ */ __name(() => {
  const { show, edit, list, create } = useNavigation();
  const handleSubmitWithRedirect = (0, import_react42.useCallback)(
    ({
      redirect,
      resource,
      id,
      meta = {}
    }) => {
      if (redirect && resource) {
        if (!!resource.show && redirect === "show" && id) {
          return show(resource, id, void 0, meta);
        }
        if (!!resource.edit && redirect === "edit" && id) {
          return edit(resource, id, void 0, meta);
        }
        if (!!resource.create && redirect === "create") {
          return create(resource, void 0, meta);
        }
        return list(resource, "push", meta);
      }
      return;
    },
    []
  );
  return handleSubmitWithRedirect;
}, "useRedirectionAfterSubmission");

// src/hooks/router/use-go/index.tsx
var import_react44 = __toESM(require("react"));

// src/hooks/router/use-get-to-path/index.ts
var import_react43 = __toESM(require("react"));
var useGetToPath = /* @__PURE__ */ __name(() => {
  const routerType = useRouterType();
  const { resource: resourceFromRoute, resources } = useResource();
  const parsed = useParsed();
  const fn = import_react43.default.useCallback(
    ({ resource, action, meta }) => {
      var _a;
      const selectedResource = resource || resourceFromRoute;
      if (!selectedResource) {
        return void 0;
      }
      const actionRoutes = getActionRoutesFromResource(
        selectedResource,
        resources,
        routerType === "legacy"
      );
      const actionRoute = (_a = actionRoutes.find(
        (item) => item.action === action
      )) == null ? void 0 : _a.route;
      if (!actionRoute) {
        return void 0;
      }
      const composed = composeRoute(
        actionRoute,
        selectedResource == null ? void 0 : selectedResource.meta,
        parsed,
        meta
      );
      return composed;
    },
    [resources, resourceFromRoute, parsed]
  );
  return fn;
}, "useGetToPath");

// src/hooks/router/use-go/index.tsx
var useGo = /* @__PURE__ */ __name(() => {
  const bindings = (0, import_react44.useContext)(RouterBindingsContext);
  const { select: resourceSelect } = useResource();
  const getToPath = useGetToPath();
  const useGo2 = import_react44.default.useMemo(
    () => (bindings == null ? void 0 : bindings.go) ?? (() => () => void 0),
    [bindings == null ? void 0 : bindings.go]
  );
  const goFromRouter = useGo2();
  const go = (0, import_react44.useCallback)(
    (config) => {
      if (typeof config.to !== "object") {
        return goFromRouter({ ...config, to: config.to });
      }
      const { resource } = resourceSelect(config.to.resource);
      handleResourceErrors(config.to, resource);
      const newTo = getToPath({
        resource,
        action: config.to.action,
        meta: {
          id: config.to.id,
          ...config.to.meta
        }
      });
      return goFromRouter({
        ...config,
        to: newTo
      });
    },
    [resourceSelect, goFromRouter]
  );
  return go;
}, "useGo");
var handleResourceErrors = /* @__PURE__ */ __name((to, resource) => {
  if (!(to == null ? void 0 : to.action) || !(to == null ? void 0 : to.resource)) {
    throw new Error(`[useGo]: "action" or "resource" is required.`);
  }
  if (["edit", "show", "clone"].includes(to == null ? void 0 : to.action) && !to.id) {
    throw new Error(
      `[useGo]: [action: ${to.action}] requires an "id" for resource [resource: ${to.resource}]`
    );
  }
  const actionUrl = resource[to.action];
  if (!actionUrl) {
    throw new Error(
      `[useGo]: [action: ${to.action}] is not defined for [resource: ${to.resource}]`
    );
  }
}, "handleResourceErrors");

// src/hooks/router/use-back/index.tsx
var import_react45 = __toESM(require("react"));
var useBack = /* @__PURE__ */ __name(() => {
  const bindings = (0, import_react45.useContext)(RouterBindingsContext);
  const useBack2 = import_react45.default.useMemo(
    () => (bindings == null ? void 0 : bindings.back) ?? (() => () => void 0),
    [bindings == null ? void 0 : bindings.back]
  );
  const back = useBack2();
  return back;
}, "useBack");

// src/hooks/navigation/index.ts
var useNavigation = /* @__PURE__ */ __name(() => {
  const { resources } = useResource();
  const routerType = useRouterType();
  const { useHistory } = useRouterContext();
  const history = useHistory();
  const parsed = useParsed();
  const go = useGo();
  const back = useBack();
  const handleUrl = /* @__PURE__ */ __name((url, type = "push") => {
    if (routerType === "legacy") {
      history[type](url);
    } else {
      go({ to: url, type });
    }
  }, "handleUrl");
  const createUrl = /* @__PURE__ */ __name((resource, meta = {}) => {
    var _a;
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const createActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "create");
      if (!createActionRoute2) {
        return "";
      }
      return composeRoute(
        createActionRoute2.route,
        resourceItem2 == null ? void 0 : resourceItem2.meta,
        parsed,
        meta
      );
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const createActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "create")) == null ? void 0 : _a.route;
    if (!createActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(createActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, meta),
      type: "path"
    });
  }, "createUrl");
  const editUrl = /* @__PURE__ */ __name((resource, id, meta = {}) => {
    var _a;
    const encodedId = encodeURIComponent(id);
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const editActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "edit");
      if (!editActionRoute2) {
        return "";
      }
      return composeRoute(editActionRoute2.route, resourceItem2 == null ? void 0 : resourceItem2.meta, parsed, {
        ...meta,
        id: encodedId
      });
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const editActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "edit")) == null ? void 0 : _a.route;
    if (!editActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(editActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
        ...meta,
        id: encodedId
      }),
      type: "path"
    });
  }, "editUrl");
  const cloneUrl = /* @__PURE__ */ __name((resource, id, meta = {}) => {
    var _a;
    const encodedId = encodeURIComponent(id);
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const cloneActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "clone");
      if (!cloneActionRoute2) {
        return "";
      }
      return composeRoute(cloneActionRoute2.route, resourceItem2 == null ? void 0 : resourceItem2.meta, parsed, {
        ...meta,
        id: encodedId
      });
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const cloneActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "clone")) == null ? void 0 : _a.route;
    if (!cloneActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(cloneActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
        ...meta,
        id: encodedId
      }),
      type: "path"
    });
  }, "cloneUrl");
  const showUrl = /* @__PURE__ */ __name((resource, id, meta = {}) => {
    var _a;
    const encodedId = encodeURIComponent(id);
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const showActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "show");
      if (!showActionRoute2) {
        return "";
      }
      return composeRoute(showActionRoute2.route, resourceItem2 == null ? void 0 : resourceItem2.meta, parsed, {
        ...meta,
        id: encodedId
      });
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const showActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "show")) == null ? void 0 : _a.route;
    if (!showActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(showActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
        ...meta,
        id: encodedId
      }),
      type: "path"
    });
  }, "showUrl");
  const listUrl = /* @__PURE__ */ __name((resource, meta = {}) => {
    var _a;
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const listActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "list");
      if (!listActionRoute2) {
        return "";
      }
      return composeRoute(
        listActionRoute2.route,
        resourceItem2 == null ? void 0 : resourceItem2.meta,
        parsed,
        meta
      );
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const listActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "list")) == null ? void 0 : _a.route;
    if (!listActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(listActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, meta),
      type: "path"
    });
  }, "listUrl");
  const create = /* @__PURE__ */ __name((resource, type = "push", meta = {}) => {
    handleUrl(createUrl(resource, meta), type);
  }, "create");
  const edit = /* @__PURE__ */ __name((resource, id, type = "push", meta = {}) => {
    handleUrl(editUrl(resource, id, meta), type);
  }, "edit");
  const clone = /* @__PURE__ */ __name((resource, id, type = "push", meta = {}) => {
    handleUrl(cloneUrl(resource, id, meta), type);
  }, "clone");
  const show = /* @__PURE__ */ __name((resource, id, type = "push", meta = {}) => {
    handleUrl(showUrl(resource, id, meta), type);
  }, "show");
  const list = /* @__PURE__ */ __name((resource, type = "push", meta = {}) => {
    handleUrl(listUrl(resource, meta), type);
  }, "list");
  const push = /* @__PURE__ */ __name((path, ...rest) => {
    if (routerType === "legacy") {
      history.push(path, ...rest);
    } else {
      go({ to: path, type: "push" });
    }
  }, "push");
  const replace = /* @__PURE__ */ __name((path, ...rest) => {
    if (routerType === "legacy") {
      history.replace(path, ...rest);
    } else {
      go({ to: path, type: "replace" });
    }
  }, "replace");
  const goBack = /* @__PURE__ */ __name(() => {
    if (routerType === "legacy") {
      history.goBack();
    } else {
      back();
    }
  }, "goBack");
  return {
    create,
    createUrl,
    edit,
    editUrl,
    clone,
    cloneUrl,
    show,
    showUrl,
    list,
    listUrl,
    push,
    replace,
    goBack
  };
}, "useNavigation");

// src/hooks/show/useShow.ts
var import_react46 = __toESM(require("react"));
var import_warn_once4 = __toESM(require("warn-once"));
var useShow = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  id,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  dataProviderName,
  queryOptions,
  overtimeOptions
} = {}) => {
  const {
    resource,
    id: idFromRoute,
    identifier
  } = useResource(resourceFromProp);
  const { identifier: inferredIdentifier } = useResource();
  const getMeta = useMeta();
  const getDefaultId = /* @__PURE__ */ __name(() => {
    const idFromPropsOrRoute = id ?? idFromRoute;
    if (resourceFromProp && resourceFromProp !== inferredIdentifier) {
      return id;
    }
    return idFromPropsOrRoute;
  }, "getDefaultId");
  const defaultId = getDefaultId();
  const [showId, setShowId] = (0, import_react46.useState)(defaultId);
  import_react46.default.useEffect(() => {
    setShowId(defaultId);
  }, [defaultId]);
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  (0, import_warn_once4.default)(
    Boolean(resourceFromProp) && !id,
    `[useShow]: resource: "${identifier}", id: ${id} 

If you don't use the \`setShowId\` method to set the \`showId\`, you should pass the \`id\` prop to \`useShow\`. Otherwise, \`useShow\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/api-reference/core/hooks/show/useShow/#resource`
  );
  const queryResult = useOne({
    resource: identifier,
    id: showId ?? "",
    queryOptions: {
      enabled: showId !== void 0,
      ...queryOptions
    },
    successNotification,
    errorNotification,
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode,
    onLiveEvent,
    dataProviderName
  });
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResult.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return {
    queryResult,
    showId,
    setShowId,
    overtime: { elapsedTime }
  };
}, "useShow");

// src/hooks/import/index.tsx
var import_react47 = require("react");
var import_papaparse2 = require("papaparse");
var import_chunk = __toESM(require("lodash/chunk"));
var useImport = /* @__PURE__ */ __name(({
  resourceName,
  resource: resourceFromProps,
  mapData = /* @__PURE__ */ __name((item) => item, "mapData"),
  paparseOptions,
  batchSize = Number.MAX_SAFE_INTEGER,
  onFinish,
  meta,
  metaData,
  onProgress,
  dataProviderName
} = {}) => {
  const [processedAmount, setProcessedAmount] = (0, import_react47.useState)(0);
  const [totalAmount, setTotalAmount] = (0, import_react47.useState)(0);
  const [isLoading, setIsLoading] = (0, import_react47.useState)(false);
  const { resource, identifier } = useResource(
    resourceFromProps ?? resourceName
  );
  const getMeta = useMeta();
  const createMany = useCreateMany();
  const create = useCreate();
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  let mutationResult;
  if (batchSize === 1) {
    mutationResult = create;
  } else {
    mutationResult = createMany;
  }
  const handleCleanup = /* @__PURE__ */ __name(() => {
    setTotalAmount(0);
    setProcessedAmount(0);
    setIsLoading(false);
  }, "handleCleanup");
  const handleFinish = /* @__PURE__ */ __name((createdValues) => {
    const result = {
      succeeded: createdValues.filter(
        (item) => item.type === "success"
      ),
      errored: createdValues.filter(
        (item) => item.type === "error"
      )
    };
    onFinish == null ? void 0 : onFinish(result);
    setIsLoading(false);
  }, "handleFinish");
  (0, import_react47.useEffect)(() => {
    onProgress == null ? void 0 : onProgress({ totalAmount, processedAmount });
  }, [totalAmount, processedAmount]);
  const handleChange = /* @__PURE__ */ __name(({ file }) => {
    handleCleanup();
    return new Promise((resolve) => {
      setIsLoading(true);
      (0, import_papaparse2.parse)(file, {
        complete: async ({ data }) => {
          const values = importCSVMapper(data, mapData);
          setTotalAmount(values.length);
          if (batchSize === 1) {
            const valueFns = values.map((value) => {
              const fn = /* @__PURE__ */ __name(async () => {
                const response = await create.mutateAsync({
                  resource: identifier ?? "",
                  values: value,
                  successNotification: false,
                  errorNotification: false,
                  dataProviderName,
                  meta: combinedMeta,
                  metaData: combinedMeta
                });
                return { response, value };
              }, "fn");
              return fn;
            });
            const createdValues = await sequentialPromises(
              valueFns,
              ({ response, value }) => {
                setProcessedAmount((currentAmount) => {
                  return currentAmount + 1;
                });
                return {
                  response: [response.data],
                  type: "success",
                  request: [value]
                };
              },
              (error, index) => {
                return {
                  response: [error],
                  type: "error",
                  request: [values[index]]
                };
              }
            );
            resolve(createdValues);
          } else {
            const chunks = (0, import_chunk.default)(values, batchSize);
            const chunkedFns = chunks.map((chunkedValues) => {
              const fn = /* @__PURE__ */ __name(async () => {
                const response = await createMany.mutateAsync({
                  resource: identifier ?? "",
                  values: chunkedValues,
                  successNotification: false,
                  errorNotification: false,
                  dataProviderName,
                  meta: combinedMeta,
                  metaData: combinedMeta
                });
                return {
                  response,
                  value: chunkedValues,
                  currentBatchLength: chunkedValues.length
                };
              }, "fn");
              return fn;
            });
            const createdValues = await sequentialPromises(
              chunkedFns,
              ({ response, currentBatchLength, value }) => {
                setProcessedAmount((currentAmount) => {
                  return currentAmount + currentBatchLength;
                });
                return {
                  response: response.data,
                  type: "success",
                  request: value
                };
              },
              (error, index) => {
                return {
                  response: [error],
                  type: "error",
                  request: chunks[index]
                };
              }
            );
            resolve(createdValues);
          }
        },
        ...paparseOptions
      });
    }).then((createdValues) => {
      handleFinish(createdValues);
      return createdValues;
    });
  }, "handleChange");
  return {
    inputProps: {
      type: "file",
      accept: ".csv",
      onChange: (event) => {
        if (event.target.files && event.target.files.length > 0) {
          handleChange({ file: event.target.files[0] });
        }
      }
    },
    mutationResult,
    isLoading,
    handleChange
  };
}, "useImport");

// src/hooks/modal/useModal/index.tsx
var import_react48 = require("react");
var useModal = /* @__PURE__ */ __name(({
  defaultVisible = false
} = {}) => {
  const [visible, setVisible] = (0, import_react48.useState)(defaultVisible);
  const show = (0, import_react48.useCallback)(() => setVisible(true), [visible]);
  const close = (0, import_react48.useCallback)(() => setVisible(false), [visible]);
  return {
    visible,
    show,
    close
  };
}, "useModal");

// src/hooks/router/use-to-path/index.ts
var useToPath = /* @__PURE__ */ __name(({
  resource,
  action,
  meta,
  legacy
}) => {
  const getToPath = useGetToPath();
  return getToPath({ resource, action, meta, legacy });
}, "useToPath");

// src/hooks/router/use-link/index.tsx
var import_react49 = __toESM(require("react"));
var useLink = /* @__PURE__ */ __name(() => {
  const bindings = (0, import_react49.useContext)(RouterBindingsContext);
  if (bindings == null ? void 0 : bindings.Link) {
    return bindings.Link;
  }
  const FallbackLink = /* @__PURE__ */ __name(({ to, ...rest }) => /* @__PURE__ */ import_react49.default.createElement("a", { href: to, ...rest }), "FallbackLink");
  return FallbackLink;
}, "useLink");

// src/hooks/legacy-router/useRouterContext.ts
var import_react51 = require("react");

// src/contexts/legacy-router/index.tsx
var import_react50 = __toESM(require("react"));
var defaultProvider = {
  useHistory: () => false,
  useLocation: () => false,
  useParams: () => ({}),
  Prompt: () => null,
  Link: () => null
};
var LegacyRouterContext = import_react50.default.createContext(defaultProvider);
var RouterContext = LegacyRouterContext;
var LegacyRouterContextProvider = /* @__PURE__ */ __name(({
  children,
  useHistory,
  useLocation,
  useParams,
  Prompt,
  Link,
  routes
}) => {
  return /* @__PURE__ */ import_react50.default.createElement(
    RouterContext.Provider,
    {
      value: {
        useHistory: useHistory ?? defaultProvider.useHistory,
        useLocation: useLocation ?? defaultProvider.useLocation,
        useParams: useParams ?? defaultProvider.useParams,
        Prompt: Prompt ?? defaultProvider.Prompt,
        Link: Link ?? defaultProvider.Link,
        routes: routes ?? defaultProvider.routes
      }
    },
    children
  );
}, "LegacyRouterContextProvider");

// src/hooks/legacy-router/useRouterContext.ts
var useRouterContext = /* @__PURE__ */ __name(() => {
  const routerContextValues = (0, import_react51.useContext)(RouterContext);
  const { useHistory, useLocation, useParams, Prompt, Link, routes } = routerContextValues ?? defaultProvider;
  return {
    useHistory,
    useLocation,
    useParams,
    Prompt,
    Link,
    routes
  };
}, "useRouterContext");

// src/hooks/accessControl/useCan/index.ts
var import_react_query24 = require("@tanstack/react-query");
var import_react53 = require("react");

// src/contexts/accessControl/index.tsx
var import_react52 = __toESM(require("react"));
var AccessControlContext = import_react52.default.createContext({
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false }
  }
});
var AccessControlContextProvider = /* @__PURE__ */ __name(({ can, children, options }) => {
  return /* @__PURE__ */ import_react52.default.createElement(
    AccessControlContext.Provider,
    {
      value: {
        can,
        options: options ? {
          ...options,
          buttons: {
            enableAccessControl: true,
            hideIfUnauthorized: false,
            ...options.buttons
          }
        } : {
          buttons: {
            enableAccessControl: true,
            hideIfUnauthorized: false
          },
          queryOptions: void 0
        }
      }
    },
    children
  );
}, "AccessControlContextProvider");

// src/definitions/helpers/sanitize-resource/index.ts
var sanitizeResource = /* @__PURE__ */ __name((resource) => {
  if (!resource) {
    return void 0;
  }
  const {
    icon,
    list,
    edit,
    create,
    show,
    clone,
    children,
    meta,
    options,
    ...restResource
  } = resource;
  const { icon: _metaIcon, ...restMeta } = meta ?? {};
  const { icon: _optionsIcon, ...restOptions } = options ?? {};
  return {
    ...restResource,
    ...meta ? { meta: restMeta } : {},
    ...options ? { options: restOptions } : {}
  };
}, "sanitizeResource");

// src/hooks/accessControl/useCan/index.ts
var import_devtools_internal22 = require("@refinedev/devtools-internal");
var useCan = /* @__PURE__ */ __name(({
  action,
  resource,
  params,
  queryOptions: hookQueryOptions
}) => {
  const { can, options: globalOptions } = (0, import_react53.useContext)(AccessControlContext);
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const { queryOptions: globalQueryOptions } = globalOptions || {};
  const mergedQueryOptions = {
    ...globalQueryOptions,
    ...hookQueryOptions
  };
  const { resource: _resource, ...paramsRest } = params ?? {};
  const sanitizedResource = sanitizeResource(_resource);
  const queryResponse = (0, import_react_query24.useQuery)({
    queryKey: keys2().access().resource(resource).action(action).params({
      params: { ...paramsRest, resource: sanitizedResource },
      enabled: mergedQueryOptions == null ? void 0 : mergedQueryOptions.enabled
    }).get(preferLegacyKeys),
    // Enabled check for `can` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: () => (can == null ? void 0 : can({
      action,
      resource,
      params: { ...paramsRest, resource: sanitizedResource }
    })) ?? Promise.resolve({ can: true }),
    enabled: typeof can !== "undefined",
    ...mergedQueryOptions,
    meta: {
      ...mergedQueryOptions == null ? void 0 : mergedQueryOptions.meta,
      ...(0, import_devtools_internal22.getXRay)("useCan", preferLegacyKeys)
    },
    retry: false
  });
  return typeof can === "undefined" ? { data: { can: true } } : queryResponse;
}, "useCan");

// src/hooks/accessControl/useCanWithoutCache.ts
var import_react54 = __toESM(require("react"));
var useCanWithoutCache = /* @__PURE__ */ __name(() => {
  const { can: canFromContext } = import_react54.default.useContext(AccessControlContext);
  const can = import_react54.default.useMemo(() => {
    if (!canFromContext) {
      return void 0;
    }
    const canWithSanitizedResource = /* @__PURE__ */ __name(async ({ params, ...rest }) => {
      const sanitizedResource = (params == null ? void 0 : params.resource) ? sanitizeResource(params.resource) : void 0;
      return canFromContext({
        ...rest,
        ...params ? {
          params: {
            ...params,
            resource: sanitizedResource
          }
        } : {}
      });
    }, "canWithSanitizedResource");
    return canWithSanitizedResource;
  }, [canFromContext]);
  return { can };
}, "useCanWithoutCache");

// src/hooks/useSelect/index.ts
var import_react55 = require("react");
var import_uniqBy = __toESM(require("lodash/uniqBy"));
var import_debounce2 = __toESM(require("lodash/debounce"));
var import_get = __toESM(require("lodash/get"));
var useSelect = /* @__PURE__ */ __name((props) => {
  const [search, setSearch] = (0, import_react55.useState)([]);
  const [options, setOptions] = (0, import_react55.useState)([]);
  const [selectedOptions, setSelectedOptions] = (0, import_react55.useState)([]);
  const {
    resource: resourceFromProps,
    sort,
    sorters,
    filters = [],
    optionLabel = "title",
    optionValue = "id",
    searchField = typeof optionLabel === "string" ? optionLabel : "title",
    debounce: debounceValue = 300,
    successNotification,
    errorNotification,
    defaultValueQueryOptions: defaultValueQueryOptionsFromProps,
    queryOptions,
    fetchSize,
    pagination,
    hasPagination = false,
    liveMode,
    defaultValue = [],
    onLiveEvent,
    onSearch: onSearchFromProp,
    liveParams,
    meta,
    metaData,
    dataProviderName,
    overtimeOptions
  } = props;
  const getOptionLabel = (0, import_react55.useCallback)(
    (item) => {
      if (typeof optionLabel === "string") {
        return (0, import_get.default)(item, optionLabel);
      }
      return optionLabel(item);
    },
    [optionLabel]
  );
  const getOptionValue = (0, import_react55.useCallback)(
    (item) => {
      if (typeof optionValue === "string") {
        return (0, import_get.default)(item, optionValue);
      }
      return optionValue(item);
    },
    [optionValue]
  );
  const { resource, identifier } = useResource(resourceFromProps);
  const getMeta = useMeta();
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const defaultValueQueryOnSuccess = (0, import_react55.useCallback)(
    (data) => {
      setSelectedOptions(
        data.data.map(
          (item) => ({
            label: getOptionLabel(item),
            value: getOptionValue(item)
          })
        )
      );
    },
    [optionLabel, optionValue]
  );
  const defaultValueQueryOptions = defaultValueQueryOptionsFromProps ?? queryOptions;
  const defaultValueQueryResult = useMany({
    resource: identifier,
    ids: defaultValues,
    queryOptions: {
      ...defaultValueQueryOptions,
      enabled: defaultValues.length > 0 && ((defaultValueQueryOptions == null ? void 0 : defaultValueQueryOptions.enabled) ?? true),
      onSuccess: (data) => {
        var _a;
        defaultValueQueryOnSuccess(data);
        (_a = defaultValueQueryOptions == null ? void 0 : defaultValueQueryOptions.onSuccess) == null ? void 0 : _a.call(defaultValueQueryOptions, data);
      }
    },
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode: "off",
    dataProviderName
  });
  const defaultQueryOnSuccess = (0, import_react55.useCallback)(
    (data) => {
      {
        setOptions(
          data.data.map(
            (item) => ({
              label: getOptionLabel(item),
              value: getOptionValue(item)
            })
          )
        );
      }
    },
    [optionLabel, optionValue]
  );
  const queryResult = useList({
    resource: identifier,
    sorters: pickNotDeprecated(sorters, sort),
    filters: filters.concat(search),
    pagination: {
      current: pagination == null ? void 0 : pagination.current,
      pageSize: (pagination == null ? void 0 : pagination.pageSize) ?? fetchSize,
      mode: pagination == null ? void 0 : pagination.mode
    },
    hasPagination,
    queryOptions: {
      ...queryOptions,
      onSuccess: (data) => {
        var _a;
        defaultQueryOnSuccess(data);
        (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      }
    },
    successNotification,
    errorNotification,
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode,
    liveParams,
    onLiveEvent,
    dataProviderName
  });
  const onSearch = /* @__PURE__ */ __name((value) => {
    if (onSearchFromProp) {
      setSearch(onSearchFromProp(value));
      return;
    }
    if (!value) {
      setSearch([]);
      return;
    }
    setSearch([
      {
        field: searchField,
        operator: "contains",
        value
      }
    ]);
  }, "onSearch");
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResult.isFetching || defaultValueQueryResult.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  const combinedOptions = (0, import_react55.useMemo)(
    () => (0, import_uniqBy.default)([...options, ...selectedOptions], "value"),
    [options, selectedOptions]
  );
  return {
    queryResult,
    defaultValueQueryResult,
    options: combinedOptions,
    onSearch: (0, import_debounce2.default)(onSearch, debounceValue),
    overtime: { elapsedTime }
  };
}, "useSelect");

// src/hooks/useTable/index.ts
var import_react56 = __toESM(require("react"));
var import_qs4 = __toESM(require("qs"));
var import_differenceWith2 = __toESM(require("lodash/differenceWith"));
var import_isEqual3 = __toESM(require("lodash/isEqual"));
var import_warn_once5 = __toESM(require("warn-once"));
var defaultPermanentFilter = [];
var defaultPermanentSorter = [];
function useTable({
  initialCurrent,
  initialPageSize,
  hasPagination = true,
  pagination,
  initialSorter,
  permanentSorter = defaultPermanentSorter,
  defaultSetFilterBehavior,
  initialFilter,
  permanentFilter = defaultPermanentFilter,
  filters: filtersFromProp,
  sorters: sortersFromProp,
  syncWithLocation: syncWithLocationProp,
  resource: resourceFromProp,
  successNotification,
  errorNotification,
  queryOptions,
  liveMode: liveModeFromProp,
  onLiveEvent,
  liveParams,
  meta,
  metaData,
  dataProviderName,
  overtimeOptions
} = {}) {
  var _a, _b, _c, _d, _e;
  const { syncWithLocation: syncWithLocationContext } = useSyncWithLocation();
  const syncWithLocation = syncWithLocationProp ?? syncWithLocationContext;
  const liveMode = useLiveMode(liveModeFromProp);
  const routerType = useRouterType();
  const { useLocation } = useRouterContext();
  const { search, pathname } = useLocation();
  const getMeta = useMeta();
  const parsedParams = useParsed();
  const isServerSideFilteringEnabled = ((filtersFromProp == null ? void 0 : filtersFromProp.mode) || "server") === "server";
  const isServerSideSortingEnabled = ((sortersFromProp == null ? void 0 : sortersFromProp.mode) || "server") === "server";
  const hasPaginationString = hasPagination === false ? "off" : "server";
  const isPaginationEnabled = ((pagination == null ? void 0 : pagination.mode) ?? hasPaginationString) !== "off";
  const prefferedCurrent = pickNotDeprecated(
    pagination == null ? void 0 : pagination.current,
    initialCurrent
  );
  const prefferedPageSize = pickNotDeprecated(
    pagination == null ? void 0 : pagination.pageSize,
    initialPageSize
  );
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } = parseTableParams(search ?? "?");
  const preferredInitialFilters = pickNotDeprecated(
    filtersFromProp == null ? void 0 : filtersFromProp.initial,
    initialFilter
  );
  const preferredPermanentFilters = pickNotDeprecated(filtersFromProp == null ? void 0 : filtersFromProp.permanent, permanentFilter) ?? defaultPermanentFilter;
  const preferredInitialSorters = pickNotDeprecated(
    sortersFromProp == null ? void 0 : sortersFromProp.initial,
    initialSorter
  );
  const preferredPermanentSorters = pickNotDeprecated(sortersFromProp == null ? void 0 : sortersFromProp.permanent, permanentSorter) ?? defaultPermanentSorter;
  const prefferedFilterBehavior = pickNotDeprecated(
    filtersFromProp == null ? void 0 : filtersFromProp.defaultBehavior,
    defaultSetFilterBehavior
  ) ?? "merge";
  let defaultCurrent;
  let defaultPageSize;
  let defaultSorter;
  let defaultFilter;
  if (syncWithLocation) {
    defaultCurrent = ((_a = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _a.current) || parsedCurrent || prefferedCurrent || 1;
    defaultPageSize = ((_b = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _b.pageSize) || parsedPageSize || prefferedPageSize || 10;
    defaultSorter = ((_c = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _c.sorters) || (parsedSorter.length ? parsedSorter : preferredInitialSorters);
    defaultFilter = ((_d = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _d.filters) || (parsedFilters.length ? parsedFilters : preferredInitialFilters);
  } else {
    defaultCurrent = prefferedCurrent || 1;
    defaultPageSize = prefferedPageSize || 10;
    defaultSorter = preferredInitialSorters;
    defaultFilter = preferredInitialFilters;
  }
  const { replace } = useNavigation();
  const go = useGo();
  const { resource, identifier } = useResource(resourceFromProp);
  const combinedMeta = getMeta({
    resource,
    meta: preferredMeta
  });
  import_react56.default.useEffect(() => {
    (0, import_warn_once5.default)(
      typeof identifier === "undefined",
      "useTable: `resource` is not defined."
    );
  }, [identifier]);
  const [sorters, setSorters] = (0, import_react56.useState)(
    setInitialSorters(preferredPermanentSorters, defaultSorter ?? [])
  );
  const [filters, setFilters] = (0, import_react56.useState)(
    setInitialFilters(preferredPermanentFilters, defaultFilter ?? [])
  );
  const [current, setCurrent] = (0, import_react56.useState)(defaultCurrent);
  const [pageSize, setPageSize] = (0, import_react56.useState)(defaultPageSize);
  const getCurrentQueryParams = /* @__PURE__ */ __name(() => {
    if (routerType === "new") {
      const { sorters: sorters2, filters: filters3, pageSize: pageSize3, current: current3, ...rest2 } = (parsedParams == null ? void 0 : parsedParams.params) ?? {};
      return rest2;
    }
    const { sorter, filters: filters2, pageSize: pageSize2, current: current2, ...rest } = import_qs4.default.parse(search, {
      ignoreQueryPrefix: true
    });
    return rest;
  }, "getCurrentQueryParams");
  const createLinkForSyncWithLocation = /* @__PURE__ */ __name(({
    pagination: { current: current2, pageSize: pageSize2 },
    sorter,
    filters: filters2
  }) => {
    if (routerType === "new") {
      return go({
        type: "path",
        options: {
          keepHash: true,
          keepQuery: true
        },
        query: {
          ...isPaginationEnabled ? { current: current2, pageSize: pageSize2 } : {},
          sorters: sorter,
          filters: filters2,
          ...getCurrentQueryParams()
        }
      }) ?? "";
    }
    const currentQueryParams = import_qs4.default.parse(search == null ? void 0 : search.substring(1));
    const stringifyParams = stringifyTableParams({
      pagination: {
        pageSize: pageSize2,
        current: current2
      },
      sorters: sorters ?? sorter,
      filters: filters2,
      ...currentQueryParams
    });
    return `${pathname ?? ""}?${stringifyParams ?? ""}`;
  }, "createLinkForSyncWithLocation");
  (0, import_react56.useEffect)(() => {
    if (search === "") {
      setCurrent(defaultCurrent);
      setPageSize(defaultPageSize);
      setSorters(
        setInitialSorters(preferredPermanentSorters, defaultSorter ?? [])
      );
      setFilters(
        setInitialFilters(preferredPermanentFilters, defaultFilter ?? [])
      );
    }
  }, [search]);
  (0, import_react56.useEffect)(() => {
    if (syncWithLocation) {
      const queryParams = getCurrentQueryParams();
      if (routerType === "new") {
        go({
          type: "replace",
          options: {
            keepQuery: true
          },
          query: {
            ...isPaginationEnabled ? { pageSize, current } : {},
            sorters: (0, import_differenceWith2.default)(
              sorters,
              preferredPermanentSorters,
              import_isEqual3.default
            ),
            filters: (0, import_differenceWith2.default)(
              filters,
              preferredPermanentFilters,
              import_isEqual3.default
            )
            // ...queryParams,
          }
        });
      } else {
        const stringifyParams = stringifyTableParams({
          ...isPaginationEnabled ? {
            pagination: {
              pageSize,
              current
            }
          } : {},
          sorters: (0, import_differenceWith2.default)(sorters, preferredPermanentSorters, import_isEqual3.default),
          filters: (0, import_differenceWith2.default)(filters, preferredPermanentFilters, import_isEqual3.default),
          ...queryParams
        });
        return replace == null ? void 0 : replace(`${pathname}?${stringifyParams}`, void 0, {
          shallow: true
        });
      }
    }
  }, [syncWithLocation, current, pageSize, sorters, filters]);
  const queryResult = useList({
    resource: identifier,
    hasPagination,
    pagination: { current, pageSize, mode: pagination == null ? void 0 : pagination.mode },
    filters: isServerSideFilteringEnabled ? unionFilters(preferredPermanentFilters, filters) : void 0,
    sorters: isServerSideSortingEnabled ? unionSorters(preferredPermanentSorters, sorters) : void 0,
    queryOptions,
    successNotification,
    errorNotification,
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode,
    liveParams,
    onLiveEvent,
    dataProviderName
  });
  const setFiltersAsMerge = /* @__PURE__ */ __name((newFilters) => {
    setFilters(
      (prevFilters) => unionFilters(preferredPermanentFilters, newFilters, prevFilters)
    );
  }, "setFiltersAsMerge");
  const setFiltersAsReplace = /* @__PURE__ */ __name((newFilters) => {
    setFilters(unionFilters(preferredPermanentFilters, newFilters));
  }, "setFiltersAsReplace");
  const setFiltersWithSetter = /* @__PURE__ */ __name((setter) => {
    setFilters((prev) => unionFilters(preferredPermanentFilters, setter(prev)));
  }, "setFiltersWithSetter");
  const setFiltersFn = /* @__PURE__ */ __name((setterOrFilters, behavior = prefferedFilterBehavior) => {
    if (typeof setterOrFilters === "function") {
      setFiltersWithSetter(setterOrFilters);
    } else {
      if (behavior === "replace") {
        setFiltersAsReplace(setterOrFilters);
      } else {
        setFiltersAsMerge(setterOrFilters);
      }
    }
  }, "setFiltersFn");
  const setSortWithUnion = /* @__PURE__ */ __name((newSorter) => {
    setSorters(() => unionSorters(preferredPermanentSorters, newSorter));
  }, "setSortWithUnion");
  const { elapsedTime } = useLoadingOvertime({
    isLoading: queryResult.isFetching,
    interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
    onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
  });
  return {
    tableQueryResult: queryResult,
    sorters,
    setSorters: setSortWithUnion,
    sorter: sorters,
    setSorter: setSortWithUnion,
    filters,
    setFilters: setFiltersFn,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    pageCount: pageSize ? Math.ceil((((_e = queryResult.data) == null ? void 0 : _e.total) ?? 0) / pageSize) : 1,
    createLinkForSyncWithLocation,
    overtime: {
      elapsedTime
    }
  };
}
__name(useTable, "useTable");

// src/hooks/auditLog/useLog/index.ts
var import_react58 = require("react");
var import_react_query25 = require("@tanstack/react-query");

// src/contexts/auditLog/index.tsx
var import_react57 = __toESM(require("react"));
var AuditLogContext = import_react57.default.createContext({});
var AuditLogContextProvider = /* @__PURE__ */ __name(({ create, get: get2, update, children }) => {
  return /* @__PURE__ */ import_react57.default.createElement(AuditLogContext.Provider, { value: { create, get: get2, update } }, children);
}, "AuditLogContextProvider");

// src/hooks/auditLog/useLog/index.ts
var import_devtools_internal23 = require("@refinedev/devtools-internal");
var useLog = /* @__PURE__ */ __name(({
  logMutationOptions,
  renameMutationOptions
} = {}) => {
  const queryClient = (0, import_react_query25.useQueryClient)();
  const auditLogContext = (0, import_react58.useContext)(AuditLogContext);
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const authProvider = useActiveAuthProvider();
  const { resources } = (0, import_react58.useContext)(ResourceContext);
  const {
    data: identityData,
    refetch,
    isLoading
  } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy),
    queryOptions: {
      enabled: !!(auditLogContext == null ? void 0 : auditLogContext.create)
    }
  });
  const log = (0, import_react_query25.useMutation)(
    async (params) => {
      var _a, _b, _c, _d, _e;
      const resource = pickResource(params.resource, resources);
      const logPermissions = pickNotDeprecated(
        (_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.audit,
        (_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.audit,
        (_d = (_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.auditLog) == null ? void 0 : _d.permissions
      );
      if (logPermissions) {
        if (!hasPermission(logPermissions, params.action)) {
          return;
        }
      }
      let authorData;
      if (isLoading && !!(auditLogContext == null ? void 0 : auditLogContext.create)) {
        authorData = await refetch();
      }
      return await ((_e = auditLogContext.create) == null ? void 0 : _e.call(auditLogContext, {
        ...params,
        author: identityData ?? (authorData == null ? void 0 : authorData.data)
      }));
    },
    {
      mutationKey: keys2().audit().action("log").get(),
      ...logMutationOptions,
      meta: {
        ...logMutationOptions == null ? void 0 : logMutationOptions.meta,
        ...(0, import_devtools_internal23.getXRay)("useLog", preferLegacyKeys)
      }
    }
  );
  const rename = (0, import_react_query25.useMutation)(
    async (params) => {
      var _a;
      return await ((_a = auditLogContext.update) == null ? void 0 : _a.call(auditLogContext, params));
    },
    {
      onSuccess: (data) => {
        if (data == null ? void 0 : data.resource) {
          queryClient.invalidateQueries(
            keys2().audit().resource((data == null ? void 0 : data.resource) ?? "").action("list").get(preferLegacyKeys)
          );
        }
      },
      mutationKey: keys2().audit().action("rename").get(),
      ...renameMutationOptions,
      meta: {
        ...renameMutationOptions == null ? void 0 : renameMutationOptions.meta,
        ...(0, import_devtools_internal23.getXRay)("useLog", preferLegacyKeys)
      }
    }
  );
  return { log, rename };
}, "useLog");

// src/hooks/auditLog/useLogList/index.ts
var import_react59 = require("react");
var import_react_query26 = require("@tanstack/react-query");
var import_devtools_internal24 = require("@refinedev/devtools-internal");
var useLogList = /* @__PURE__ */ __name(({
  resource,
  action,
  meta,
  author,
  metaData,
  queryOptions
}) => {
  const { get: get2 } = (0, import_react59.useContext)(AuditLogContext);
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = (0, import_react_query26.useQuery)({
    queryKey: keys2().audit().resource(resource).action("list").params(meta).get(preferLegacyKeys),
    queryFn: () => (get2 == null ? void 0 : get2({
      resource,
      action,
      author,
      meta,
      metaData
    })) ?? Promise.resolve([]),
    enabled: typeof get2 !== "undefined",
    ...queryOptions,
    retry: false,
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...(0, import_devtools_internal24.getXRay)("useLogList", preferLegacyKeys)
    }
  });
  return queryResponse;
}, "useLogList");

// src/hooks/breadcrumb/index.ts
var import_react60 = require("react");
var import_warn_once6 = __toESM(require("warn-once"));
var useBreadcrumb = /* @__PURE__ */ __name(({
  meta: metaFromProps = {}
} = {}) => {
  const routerType = useRouterType();
  const { i18nProvider } = (0, import_react60.useContext)(TranslationContext);
  const parsed = useParsed();
  const translate = useTranslate();
  const { resources, resource, action } = useResource();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const breadcrumbs = [];
  if (!(resource == null ? void 0 : resource.name)) {
    return { breadcrumbs };
  }
  const addBreadcrumb = /* @__PURE__ */ __name((parentName) => {
    var _a, _b, _c, _d, _e, _f;
    const parentResource = typeof parentName === "string" ? pickResource(parentName, resources, routerType === "legacy") ?? {
      name: parentName
    } : parentName;
    if (parentResource) {
      const grandParentName = pickNotDeprecated(
        (_a = parentResource == null ? void 0 : parentResource.meta) == null ? void 0 : _a.parent,
        parentResource == null ? void 0 : parentResource.parentName
      );
      if (grandParentName) {
        addBreadcrumb(grandParentName);
      }
      const listActionOfResource = getActionRoutesFromResource(
        parentResource,
        resources,
        routerType === "legacy"
      ).find((r) => r.action === "list");
      const hrefRaw = ((_b = listActionOfResource == null ? void 0 : listActionOfResource.resource) == null ? void 0 : _b.list) ? listActionOfResource == null ? void 0 : listActionOfResource.route : void 0;
      const href = hrefRaw ? routerType === "legacy" ? hrefRaw : composeRoute(hrefRaw, parentResource == null ? void 0 : parentResource.meta, parsed, metaFromProps) : void 0;
      breadcrumbs.push({
        label: pickNotDeprecated(
          (_c = parentResource.meta) == null ? void 0 : _c.label,
          (_d = parentResource.options) == null ? void 0 : _d.label
        ) ?? translate(
          `${parentResource.name}.${parentResource.name}`,
          textTransformers.humanize(parentResource.name)
        ),
        href,
        icon: pickNotDeprecated(
          (_e = parentResource.meta) == null ? void 0 : _e.icon,
          (_f = parentResource.options) == null ? void 0 : _f.icon,
          parentResource.icon
        )
      });
    }
  }, "addBreadcrumb");
  addBreadcrumb(resource);
  if (action && action !== "list") {
    const key = `actions.${action}`;
    const actionLabel = translate(key);
    if (typeof i18nProvider !== "undefined" && actionLabel === key) {
      (0, import_warn_once6.default)(
        true,
        `[useBreadcrumb]: Breadcrumb missing translate key for the "${action}" action. Please add "actions.${action}" key to your translation file.
For more information, see https://refine.dev/docs/api-reference/core/hooks/useBreadcrumb/#i18n-support`
      );
      breadcrumbs.push({
        label: translate(
          `buttons.${action}`,
          textTransformers.humanize(action)
        )
      });
    } else {
      breadcrumbs.push({
        label: translate(key, textTransformers.humanize(action))
      });
    }
  }
  return {
    breadcrumbs
  };
}, "useBreadcrumb");

// src/hooks/menu/useMenu.tsx
var import_react61 = __toESM(require("react"));

// src/definitions/helpers/menu/create-resource-key.ts
var createResourceKey = /* @__PURE__ */ __name((resource, resources, legacy = false) => {
  const parents = [];
  let currentParentResource = getParentResource(resource, resources);
  while (currentParentResource) {
    parents.push(currentParentResource);
    currentParentResource = getParentResource(currentParentResource, resources);
  }
  parents.reverse();
  const key = [...parents, resource].map(
    (r) => removeLeadingTrailingSlashes(
      (legacy ? r.route : void 0) ?? r.identifier ?? r.name
    )
  ).join("/");
  return `/${key.replace(/^\//, "")}`;
}, "createResourceKey");

// src/definitions/helpers/menu/create-tree.ts
var createTree = /* @__PURE__ */ __name((resources, legacy = false) => {
  const root = {
    item: {
      name: "__root__"
    },
    children: {}
  };
  resources.forEach((resource) => {
    const parents = [];
    let currentParent = getParentResource(resource, resources);
    while (currentParent) {
      parents.push(currentParent);
      currentParent = getParentResource(currentParent, resources);
    }
    parents.reverse();
    let currentTree = root;
    parents.forEach((parent) => {
      const key2 = (legacy ? parent.route : void 0) ?? parent.identifier ?? parent.name;
      if (!currentTree.children[key2]) {
        currentTree.children[key2] = {
          item: parent,
          children: {}
        };
      }
      currentTree = currentTree.children[key2];
    });
    const key = (legacy ? resource.route : void 0) ?? resource.identifier ?? resource.name;
    if (!currentTree.children[key]) {
      currentTree.children[key] = {
        item: resource,
        children: {}
      };
    }
  });
  const flatten = /* @__PURE__ */ __name((tree) => {
    const items = [];
    Object.keys(tree.children).forEach((key) => {
      const itemKey = createResourceKey(
        tree.children[key].item,
        resources,
        legacy
      );
      const item = {
        ...tree.children[key].item,
        key: itemKey,
        children: flatten(tree.children[key])
      };
      items.push(item);
    });
    return items;
  }, "flatten");
  return flatten(root);
}, "createTree");

// src/hooks/menu/useMenu.tsx
var getCleanPath = /* @__PURE__ */ __name((pathname) => {
  return pathname.split("?")[0].split("#")[0].replace(/(.+)(\/$)/, "$1");
}, "getCleanPath");
var useMenu = /* @__PURE__ */ __name(({ meta, hideOnMissingParameter } = {
  hideOnMissingParameter: true
}) => {
  const translate = useTranslate();
  const getToPath = useGetToPath();
  const routerType = useRouterType();
  const { resource, resources } = useResource();
  const { pathname } = useParsed();
  const { useLocation } = useRouterContext();
  const { pathname: legacyPath } = useLocation();
  const getFriendlyName = useUserFriendlyName();
  const cleanPathname = routerType === "legacy" ? getCleanPath(legacyPath) : pathname ? getCleanPath(pathname) : void 0;
  const cleanRoute = `/${(cleanPathname ?? "").replace(/^\//, "")}`;
  const selectedKey = resource ? createResourceKey(resource, resources, routerType === "legacy") : cleanRoute ?? "";
  const defaultOpenKeys = import_react61.default.useMemo(() => {
    if (!resource)
      return [];
    let parent = getParentResource(resource, resources);
    const keys2 = [createResourceKey(resource, resources)];
    while (parent) {
      keys2.push(createResourceKey(parent, resources));
      parent = getParentResource(parent, resources);
    }
    return keys2;
  }, []);
  const prepareItem = import_react61.default.useCallback(
    (item) => {
      var _a, _b, _c, _d, _e, _f;
      if (((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.hide) ?? ((_b = item == null ? void 0 : item.options) == null ? void 0 : _b.hide))
        return void 0;
      if (!(item == null ? void 0 : item.list) && item.children.length === 0)
        return void 0;
      const composed = item.list ? getToPath({
        resource: item,
        action: "list",
        legacy: routerType === "legacy",
        meta
      }) : void 0;
      if (hideOnMissingParameter && composed && composed.match(/(\/|^):(.+?)(\/|$){1}/))
        return void 0;
      return {
        ...item,
        route: composed,
        icon: pickNotDeprecated((_c = item.meta) == null ? void 0 : _c.icon, (_d = item.options) == null ? void 0 : _d.icon, item.icon),
        label: pickNotDeprecated((_e = item == null ? void 0 : item.meta) == null ? void 0 : _e.label, (_f = item == null ? void 0 : item.options) == null ? void 0 : _f.label) ?? translate(
          `${item.name}.${item.name}`,
          getFriendlyName(item.name, "plural")
        )
      };
    },
    [routerType, meta, getToPath, translate, hideOnMissingParameter]
  );
  const treeItems = import_react61.default.useMemo(() => {
    const treeMenuItems = createTree(resources, routerType === "legacy");
    const prepare = /* @__PURE__ */ __name((items) => {
      return items.flatMap((item) => {
        const preparedNodes = prepare(item.children);
        const newItem = prepareItem({
          ...item,
          children: preparedNodes
        });
        if (!newItem)
          return [];
        return [newItem];
      });
    }, "prepare");
    return prepare(treeMenuItems);
  }, [resources, routerType, prepareItem]);
  return {
    defaultOpenKeys,
    selectedKey,
    menuItems: treeItems
  };
}, "useMenu");

// src/hooks/useMeta/index.ts
var useMeta = /* @__PURE__ */ __name(() => {
  const { params } = useParsed();
  const getMetaFn = /* @__PURE__ */ __name(({
    resource,
    meta: metaFromProp
  } = {}) => {
    const { meta } = sanitizeResource(resource) ?? { meta: {} };
    const {
      filters: _filters,
      sorters: _sorters,
      current: _current,
      pageSize: _pageSize,
      ...additionalParams
    } = params ?? {};
    return { ...meta, ...additionalParams, ...metaFromProp };
  }, "getMetaFn");
  return getMetaFn;
}, "useMeta");

// src/components/pages/error/index.tsx
var ErrorComponent = /* @__PURE__ */ __name(() => {
  const [errorMessage, setErrorMessage] = (0, import_react62.useState)();
  const translate = useTranslate();
  const { push } = useNavigation();
  const go = useGo();
  const routerType = useRouterType();
  const { resource, action } = useResource();
  (0, import_react62.useEffect)(() => {
    if (resource && action) {
      setErrorMessage(
        translate(
          "pages.error.info",
          {
            action,
            resource: resource.name
          },
          `You may have forgotten to add the "${action}" component to "${resource.name}" resource.`
        )
      );
    }
  }, [resource, action]);
  return /* @__PURE__ */ import_react62.default.createElement(import_react62.default.Fragment, null, /* @__PURE__ */ import_react62.default.createElement("h1", null, translate(
    "pages.error.404",
    void 0,
    "Sorry, the page you visited does not exist."
  )), errorMessage && /* @__PURE__ */ import_react62.default.createElement("p", null, errorMessage), /* @__PURE__ */ import_react62.default.createElement(
    "button",
    {
      onClick: () => {
        if (routerType === "legacy") {
          push("/");
        } else {
          go({ to: "/" });
        }
      }
    },
    translate("pages.error.backHome", void 0, "Back Home")
  ));
}, "ErrorComponent");

// src/components/pages/login/index.tsx
var import_react63 = __toESM(require("react"));
var LoginPage = /* @__PURE__ */ __name(() => {
  const [username, setUsername] = (0, import_react63.useState)("");
  const [password, setPassword] = (0, import_react63.useState)("");
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: login } = useLogin({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  return /* @__PURE__ */ import_react63.default.createElement(import_react63.default.Fragment, null, /* @__PURE__ */ import_react63.default.createElement("h1", null, translate("pages.login.title", "Sign in your account")), /* @__PURE__ */ import_react63.default.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        login({ username, password });
      }
    },
    /* @__PURE__ */ import_react63.default.createElement("table", null, /* @__PURE__ */ import_react63.default.createElement("tbody", null, /* @__PURE__ */ import_react63.default.createElement("tr", null, /* @__PURE__ */ import_react63.default.createElement("td", null, translate("pages.login.username", void 0, "username"), ":"), /* @__PURE__ */ import_react63.default.createElement("td", null, /* @__PURE__ */ import_react63.default.createElement(
      "input",
      {
        type: "text",
        size: 20,
        autoCorrect: "off",
        spellCheck: false,
        autoCapitalize: "off",
        autoFocus: true,
        required: true,
        value: username,
        onChange: (e) => setUsername(e.target.value)
      }
    ))), /* @__PURE__ */ import_react63.default.createElement("tr", null, /* @__PURE__ */ import_react63.default.createElement("td", null, translate("pages.login.password", void 0, "password"), ":"), /* @__PURE__ */ import_react63.default.createElement("td", null, /* @__PURE__ */ import_react63.default.createElement(
      "input",
      {
        type: "password",
        required: true,
        size: 20,
        value: password,
        onChange: (e) => setPassword(e.target.value)
      }
    ))))),
    /* @__PURE__ */ import_react63.default.createElement("br", null),
    /* @__PURE__ */ import_react63.default.createElement("input", { type: "submit", value: "login" })
  ));
}, "LoginPage");

// src/components/pages/auth/index.tsx
var import_react68 = __toESM(require("react"));

// src/components/pages/auth/components/login/index.tsx
var import_react64 = __toESM(require("react"));
var LoginPage2 = /* @__PURE__ */ __name(({
  providers,
  registerLink,
  forgotPasswordLink,
  rememberMe,
  contentProps,
  wrapperProps,
  renderContent,
  formProps,
  title = void 0,
  hideForm
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
  const [email, setEmail] = (0, import_react64.useState)("");
  const [password, setPassword] = (0, import_react64.useState)("");
  const [remember, setRemember] = (0, import_react64.useState)(false);
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: login } = useLogin({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const renderLink = /* @__PURE__ */ __name((link, text2) => {
    return /* @__PURE__ */ import_react64.default.createElement(ActiveLink, { to: link }, text2);
  }, "renderLink");
  const renderProviders = /* @__PURE__ */ __name(() => {
    if (providers) {
      return providers.map((provider) => /* @__PURE__ */ import_react64.default.createElement(
        "div",
        {
          key: provider.name,
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem"
          }
        },
        /* @__PURE__ */ import_react64.default.createElement(
          "button",
          {
            onClick: () => login({
              providerName: provider.name
            }),
            style: {
              display: "flex",
              alignItems: "center"
            }
          },
          provider == null ? void 0 : provider.icon,
          provider.label ?? /* @__PURE__ */ import_react64.default.createElement("label", null, provider.label)
        )
      ));
    }
    return null;
  }, "renderProviders");
  const content = /* @__PURE__ */ import_react64.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react64.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.login.title", "Sign in to your account")), renderProviders(), !hideForm && /* @__PURE__ */ import_react64.default.createElement(import_react64.default.Fragment, null, /* @__PURE__ */ import_react64.default.createElement("hr", null), /* @__PURE__ */ import_react64.default.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        login({ email, password, remember });
      },
      ...formProps
    },
    /* @__PURE__ */ import_react64.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ import_react64.default.createElement("label", { htmlFor: "email-input" }, translate("pages.login.fields.email", "Email")),
      /* @__PURE__ */ import_react64.default.createElement(
        "input",
        {
          id: "email-input",
          name: "email",
          type: "text",
          size: 20,
          autoCorrect: "off",
          spellCheck: false,
          autoCapitalize: "off",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ import_react64.default.createElement("label", { htmlFor: "password-input" }, translate("pages.login.fields.password", "Password")),
      /* @__PURE__ */ import_react64.default.createElement(
        "input",
        {
          id: "password-input",
          type: "password",
          name: "password",
          required: true,
          size: 20,
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      ),
      rememberMe ?? /* @__PURE__ */ import_react64.default.createElement(import_react64.default.Fragment, null, /* @__PURE__ */ import_react64.default.createElement("label", { htmlFor: "remember-me-input" }, translate("pages.login.buttons.rememberMe", "Remember me"), /* @__PURE__ */ import_react64.default.createElement(
        "input",
        {
          id: "remember-me-input",
          name: "remember",
          type: "checkbox",
          size: 20,
          checked: remember,
          value: remember.toString(),
          onChange: () => {
            setRemember(!remember);
          }
        }
      ))),
      /* @__PURE__ */ import_react64.default.createElement("br", null),
      forgotPasswordLink ?? renderLink(
        "/forgot-password",
        translate(
          "pages.login.buttons.forgotPassword",
          "Forgot password?"
        )
      ),
      /* @__PURE__ */ import_react64.default.createElement(
        "input",
        {
          type: "submit",
          value: translate("pages.login.signin", "Sign in")
        }
      ),
      registerLink ?? /* @__PURE__ */ import_react64.default.createElement("span", null, translate(
        "pages.login.buttons.noAccount",
        "Don\u2019t have an account?"
      ), " ", renderLink(
        "/register",
        translate("pages.login.register", "Sign up")
      ))
    )
  )), registerLink !== false && hideForm && /* @__PURE__ */ import_react64.default.createElement("div", { style: { textAlign: "center" } }, translate("pages.login.buttons.noAccount", "Don\u2019t have an account?"), " ", renderLink(
    "/register",
    translate("pages.login.register", "Sign up")
  )));
  return /* @__PURE__ */ import_react64.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "LoginPage");

// src/components/pages/auth/components/register/index.tsx
var import_react65 = __toESM(require("react"));
var RegisterPage = /* @__PURE__ */ __name(({
  providers,
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0,
  hideForm
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
  const [email, setEmail] = (0, import_react65.useState)("");
  const [password, setPassword] = (0, import_react65.useState)("");
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: register, isLoading } = useRegister({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const renderLink = /* @__PURE__ */ __name((link, text2) => {
    return /* @__PURE__ */ import_react65.default.createElement(ActiveLink, { to: link }, text2);
  }, "renderLink");
  const renderProviders = /* @__PURE__ */ __name(() => {
    if (providers) {
      return providers.map((provider) => /* @__PURE__ */ import_react65.default.createElement(
        "div",
        {
          key: provider.name,
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem"
          }
        },
        /* @__PURE__ */ import_react65.default.createElement(
          "button",
          {
            onClick: () => register({
              providerName: provider.name
            }),
            style: {
              display: "flex",
              alignItems: "center"
            }
          },
          provider == null ? void 0 : provider.icon,
          provider.label ?? /* @__PURE__ */ import_react65.default.createElement("label", null, provider.label)
        )
      ));
    }
    return null;
  }, "renderProviders");
  const content = /* @__PURE__ */ import_react65.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react65.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.register.title", "Sign up for your account")), renderProviders(), !hideForm && /* @__PURE__ */ import_react65.default.createElement(import_react65.default.Fragment, null, /* @__PURE__ */ import_react65.default.createElement("hr", null), /* @__PURE__ */ import_react65.default.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        register({ email, password });
      },
      ...formProps
    },
    /* @__PURE__ */ import_react65.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ import_react65.default.createElement("label", { htmlFor: "email-input" }, translate("pages.register.fields.email", "Email")),
      /* @__PURE__ */ import_react65.default.createElement(
        "input",
        {
          id: "email-input",
          name: "email",
          type: "email",
          size: 20,
          autoCorrect: "off",
          spellCheck: false,
          autoCapitalize: "off",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ import_react65.default.createElement("label", { htmlFor: "password-input" }, translate("pages.register.fields.password", "Password")),
      /* @__PURE__ */ import_react65.default.createElement(
        "input",
        {
          id: "password-input",
          name: "password",
          type: "password",
          required: true,
          size: 20,
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ import_react65.default.createElement(
        "input",
        {
          type: "submit",
          value: translate("pages.register.buttons.submit", "Sign up"),
          disabled: isLoading
        }
      ),
      loginLink ?? /* @__PURE__ */ import_react65.default.createElement(import_react65.default.Fragment, null, /* @__PURE__ */ import_react65.default.createElement("span", null, translate(
        "pages.login.buttons.haveAccount",
        "Have an account?"
      ), " ", renderLink(
        "/login",
        translate("pages.login.signin", "Sign in")
      )))
    )
  )), loginLink !== false && hideForm && /* @__PURE__ */ import_react65.default.createElement("div", { style: { textAlign: "center" } }, translate("pages.login.buttons.haveAccount", "Have an account?"), " ", renderLink("/login", translate("pages.login.signin", "Sign in"))));
  return /* @__PURE__ */ import_react65.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "RegisterPage");

// src/components/pages/auth/components/forgotPassword/index.tsx
var import_react66 = __toESM(require("react"));
var ForgotPasswordPage = /* @__PURE__ */ __name(({
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0
}) => {
  const translate = useTranslate();
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
  const [email, setEmail] = (0, import_react66.useState)("");
  const { mutate: forgotPassword, isLoading } = useForgotPassword();
  const renderLink = /* @__PURE__ */ __name((link, text2) => {
    return /* @__PURE__ */ import_react66.default.createElement(ActiveLink, { to: link }, text2);
  }, "renderLink");
  const content = /* @__PURE__ */ import_react66.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react66.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.forgotPassword.title", "Forgot your password?")), /* @__PURE__ */ import_react66.default.createElement("hr", null), /* @__PURE__ */ import_react66.default.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        forgotPassword({ email });
      },
      ...formProps
    },
    /* @__PURE__ */ import_react66.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ import_react66.default.createElement("label", { htmlFor: "email-input" }, translate("pages.forgotPassword.fields.email", "Email")),
      /* @__PURE__ */ import_react66.default.createElement(
        "input",
        {
          id: "email-input",
          name: "email",
          type: "mail",
          autoCorrect: "off",
          spellCheck: false,
          autoCapitalize: "off",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ import_react66.default.createElement(
        "input",
        {
          type: "submit",
          disabled: isLoading,
          value: translate(
            "pages.forgotPassword.buttons.submit",
            "Send reset instructions"
          )
        }
      ),
      /* @__PURE__ */ import_react66.default.createElement("br", null),
      loginLink ?? /* @__PURE__ */ import_react66.default.createElement("span", null, translate(
        "pages.register.buttons.haveAccount",
        "Have an account? "
      ), " ", renderLink("/login", translate("pages.login.signin", "Sign in")))
    )
  ));
  return /* @__PURE__ */ import_react66.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "ForgotPasswordPage");

// src/components/pages/auth/components/updatePassword/index.tsx
var import_react67 = __toESM(require("react"));
var UpdatePasswordPage = /* @__PURE__ */ __name(({
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0
}) => {
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: updatePassword, isLoading } = useUpdatePassword({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const [newPassword, setNewPassword] = (0, import_react67.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react67.useState)("");
  const content = /* @__PURE__ */ import_react67.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react67.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.updatePassword.title", "Update Password")), /* @__PURE__ */ import_react67.default.createElement("hr", null), /* @__PURE__ */ import_react67.default.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        updatePassword({
          password: newPassword,
          confirmPassword
        });
      },
      ...formProps
    },
    /* @__PURE__ */ import_react67.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ import_react67.default.createElement("label", { htmlFor: "password-input" }, translate("pages.updatePassword.fields.password", "New Password")),
      /* @__PURE__ */ import_react67.default.createElement(
        "input",
        {
          id: "password-input",
          name: "password",
          type: "password",
          required: true,
          size: 20,
          value: newPassword,
          onChange: (e) => setNewPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ import_react67.default.createElement("label", { htmlFor: "confirm-password-input" }, translate(
        "pages.updatePassword.fields.confirmPassword",
        "Confirm New Password"
      )),
      /* @__PURE__ */ import_react67.default.createElement(
        "input",
        {
          id: "confirm-password-input",
          name: "confirmPassword",
          type: "password",
          required: true,
          size: 20,
          value: confirmPassword,
          onChange: (e) => setConfirmPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ import_react67.default.createElement(
        "input",
        {
          type: "submit",
          disabled: isLoading,
          value: translate("pages.updatePassword.buttons.submit", "Update")
        }
      )
    )
  ));
  return /* @__PURE__ */ import_react67.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "UpdatePasswordPage");

// src/components/pages/auth/index.tsx
var AuthPage = /* @__PURE__ */ __name((props) => {
  const { type } = props;
  const renderView = /* @__PURE__ */ __name(() => {
    switch (type) {
      case "register":
        return /* @__PURE__ */ import_react68.default.createElement(RegisterPage, { ...props });
      case "forgotPassword":
        return /* @__PURE__ */ import_react68.default.createElement(ForgotPasswordPage, { ...props });
      case "updatePassword":
        return /* @__PURE__ */ import_react68.default.createElement(UpdatePasswordPage, { ...props });
      default:
        return /* @__PURE__ */ import_react68.default.createElement(LoginPage2, { ...props });
    }
  }, "renderView");
  return /* @__PURE__ */ import_react68.default.createElement(import_react68.default.Fragment, null, renderView());
}, "AuthPage");

// src/components/pages/ready/index.tsx
var import_react69 = __toESM(require("react"));
var ReadyPage = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ import_react69.default.createElement(import_react69.default.Fragment, null, /* @__PURE__ */ import_react69.default.createElement("h1", null, "Welcome on board"), /* @__PURE__ */ import_react69.default.createElement("p", null, "Your configuration is completed."), /* @__PURE__ */ import_react69.default.createElement("p", null, "Now you can get started by adding your resources to the", " ", /* @__PURE__ */ import_react69.default.createElement("code", null, "`resources`"), " property of ", /* @__PURE__ */ import_react69.default.createElement("code", null, "`<Refine>`")), /* @__PURE__ */ import_react69.default.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ import_react69.default.createElement("a", { href: "https://refine.dev", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ import_react69.default.createElement("button", null, "Documentation")), /* @__PURE__ */ import_react69.default.createElement("a", { href: "https://refine.dev/examples", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ import_react69.default.createElement("button", null, "Examples")), /* @__PURE__ */ import_react69.default.createElement("a", { href: "https://discord.gg/refine", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ import_react69.default.createElement("button", null, "Community"))));
}, "ReadyPage");

// src/components/pages/welcome/index.tsx
var import_react72 = __toESM(require("react"));

// src/components/pages/config-success/index.tsx
var import_react70 = __toESM(require("react"));
var cards = [
  {
    title: "Documentation",
    description: "Learn about the technical details of using Refine in your projects.",
    link: "https://refine.dev/docs",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/book.svg"
  },
  {
    title: "Tutorial",
    description: "Learn how to use Refine by building a fully-functioning CRUD app, from scratch to full launch.",
    link: "https://refine.dev/tutorial",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/hat.svg"
  },
  {
    title: "Templates",
    description: "Explore a range of pre-built templates, perfect everything from admin panels to dashboards and CRMs.",
    link: "https://refine.dev/templates",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/application.svg"
  },
  {
    title: "Community",
    description: "Join our Discord community and keep up with the latest news.",
    link: "https://discord.gg/refine",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/discord.svg"
  }
];
var ConfigSuccessPage = /* @__PURE__ */ __name(() => {
  const isTablet = useMediaQuery("(max-width: 1010px)");
  const isMobile = useMediaQuery("(max-width: 650px)");
  const getGridTemplateColumns = /* @__PURE__ */ __name(() => {
    if (isMobile) {
      return "1, 280px";
    }
    if (isTablet) {
      return "2, 280px";
    }
    return "4, 1fr";
  }, "getGridTemplateColumns");
  const getHeaderFontSize = /* @__PURE__ */ __name(() => {
    if (isMobile) {
      return "32px";
    }
    if (isTablet) {
      return "40px";
    }
    return "48px";
  }, "getHeaderFontSize");
  const getSubHeaderFontSize = /* @__PURE__ */ __name(() => {
    if (isMobile) {
      return "16px";
    }
    if (isTablet) {
      return "20px";
    }
    return "24px";
  }, "getSubHeaderFontSize");
  return /* @__PURE__ */ import_react70.default.createElement(
    "div",
    {
      style: {
        position: "fixed",
        zIndex: 10,
        inset: 0,
        overflow: "auto",
        width: "100dvw",
        height: "100dvh"
      }
    },
    /* @__PURE__ */ import_react70.default.createElement(
      "div",
      {
        style: {
          overflow: "hidden",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: isMobile ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(88.89% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(88.89% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : isTablet ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(66.67% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(66.67% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(35.56% 50% at 50% 100%, rgba(38, 217, 127, 0.12) 0%, rgba(38, 217, 127, 0) 100%), radial-gradient(35.56% 50% at 50% 0%, rgba(71, 235, 235, 0.18) 0%, rgba(71, 235, 235, 0) 100%), #1D1E30",
          minHeight: "100%",
          minWidth: "100%",
          fontFamily: "Arial",
          color: "#FFFFFF"
        }
      },
      /* @__PURE__ */ import_react70.default.createElement(
        "div",
        {
          style: {
            zIndex: 2,
            position: "absolute",
            width: isMobile ? "400px" : "800px",
            height: "552px",
            opacity: "0.5",
            background: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/welcome-page-hexagon.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)"
          }
        }
      ),
      /* @__PURE__ */ import_react70.default.createElement("div", { style: { height: isMobile ? "40px" : "80px" } }),
      /* @__PURE__ */ import_react70.default.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ import_react70.default.createElement(
        "div",
        {
          style: {
            backgroundRepeat: "no-repeat",
            backgroundSize: isMobile ? "112px 58px" : "224px 116px",
            backgroundImage: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/refine-logo.svg)",
            width: isMobile ? 112 : 224,
            height: isMobile ? 58 : 116
          }
        }
      )),
      /* @__PURE__ */ import_react70.default.createElement(
        "div",
        {
          style: {
            height: isMobile ? "120px" : isTablet ? "200px" : "30vh",
            minHeight: isMobile ? "120px" : isTablet ? "200px" : "200px"
          }
        }
      ),
      /* @__PURE__ */ import_react70.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "center"
          }
        },
        /* @__PURE__ */ import_react70.default.createElement(
          "h1",
          {
            style: {
              fontSize: getHeaderFontSize(),
              fontWeight: 700,
              margin: "0px"
            }
          },
          "Welcome Aboard!"
        ),
        /* @__PURE__ */ import_react70.default.createElement(
          "h4",
          {
            style: {
              fontSize: getSubHeaderFontSize(),
              fontWeight: 400,
              margin: "0px"
            }
          },
          "Your configuration is completed."
        )
      ),
      /* @__PURE__ */ import_react70.default.createElement("div", { style: { height: "64px" } }),
      /* @__PURE__ */ import_react70.default.createElement(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${getGridTemplateColumns()})`,
            justifyContent: "center",
            gap: "48px",
            paddingRight: "16px",
            paddingLeft: "16px",
            paddingBottom: "32px",
            maxWidth: "976px",
            margin: "auto"
          }
        },
        cards.map((card) => /* @__PURE__ */ import_react70.default.createElement(Card, { key: `welcome-page-${card.title}`, card }))
      )
    )
  );
}, "ConfigSuccessPage");
var Card = /* @__PURE__ */ __name(({ card }) => {
  const { title, description, iconUrl, link } = card;
  const [isHover, setIsHover] = (0, import_react70.useState)(false);
  return /* @__PURE__ */ import_react70.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }
    },
    /* @__PURE__ */ import_react70.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ import_react70.default.createElement(
        "a",
        {
          onPointerEnter: () => setIsHover(true),
          onPointerLeave: () => setIsHover(false),
          style: {
            display: "flex",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none"
          },
          href: link
        },
        /* @__PURE__ */ import_react70.default.createElement(
          "div",
          {
            style: {
              width: "16px",
              height: "16px",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${iconUrl})`
            }
          }
        ),
        /* @__PURE__ */ import_react70.default.createElement(
          "span",
          {
            style: {
              fontSize: "16px",
              fontWeight: 700,
              marginLeft: "13px",
              marginRight: "14px"
            }
          },
          title
        ),
        /* @__PURE__ */ import_react70.default.createElement(
          "svg",
          {
            style: {
              transition: "transform 0.5s ease-in-out, opacity 0.2s ease-in-out",
              ...isHover && {
                transform: "translateX(4px)",
                opacity: 1
              }
            },
            width: "12",
            height: "8",
            fill: "none",
            opacity: "0.5",
            xmlns: "http://www.w3.org/2000/svg"
          },
          /* @__PURE__ */ import_react70.default.createElement(
            "path",
            {
              d: "M7.293.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L8.586 5H1a1 1 0 0 1 0-2h7.586L7.293 1.707a1 1 0 0 1 0-1.414Z",
              fill: "#fff"
            }
          )
        )
      )
    ),
    /* @__PURE__ */ import_react70.default.createElement(
      "span",
      {
        style: {
          fontSize: "12px",
          opacity: 0.5,
          lineHeight: "16px"
        }
      },
      description
    )
  );
}, "Card");

// src/components/pages/config-error/index.tsx
var import_react71 = __toESM(require("react"));
var ConfigErrorPage = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ import_react71.default.createElement(
    "div",
    {
      style: {
        position: "fixed",
        zIndex: 11,
        inset: 0,
        overflow: "auto",
        width: "100dvw",
        height: "100dvh"
      }
    },
    /* @__PURE__ */ import_react71.default.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          background: "#14141FBF",
          backdropFilter: "blur(3px)"
        }
      },
      /* @__PURE__ */ import_react71.default.createElement(
        "div",
        {
          style: {
            maxWidth: "640px",
            width: "100%",
            background: "#1D1E30",
            borderRadius: "16px",
            border: "1px solid #303450",
            boxShadow: "0px 0px 120px -24px #000000"
          }
        },
        /* @__PURE__ */ import_react71.default.createElement(
          "div",
          {
            style: {
              padding: "16px 20px",
              borderBottom: "1px solid #303450",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative"
            }
          },
          /* @__PURE__ */ import_react71.default.createElement(
            ErrorGradient,
            {
              style: {
                position: "absolute",
                left: 0,
                top: 0
              }
            }
          ),
          /* @__PURE__ */ import_react71.default.createElement(
            "div",
            {
              style: {
                lineHeight: "24px",
                fontSize: "16px",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }
            },
            /* @__PURE__ */ import_react71.default.createElement(ErrorIcon, null),
            /* @__PURE__ */ import_react71.default.createElement(
              "span",
              {
                style: {
                  fontWeight: 400
                }
              },
              "Configuration Error"
            )
          )
        ),
        /* @__PURE__ */ import_react71.default.createElement(
          "div",
          {
            style: {
              padding: "20px",
              color: "#A3ADC2",
              lineHeight: "20px",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }
          },
          /* @__PURE__ */ import_react71.default.createElement(
            "p",
            {
              style: {
                margin: 0,
                padding: 0,
                lineHeight: "28px",
                fontSize: "16px"
              }
            },
            /* @__PURE__ */ import_react71.default.createElement(
              "code",
              {
                style: {
                  display: "inline-block",
                  background: "#30345080",
                  padding: "0 4px",
                  lineHeight: "24px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  color: "#FFFFFF"
                }
              },
              "<Refine />"
            ),
            " ",
            "is not initialized. Please make sure you have it mounted in your app and placed your components inside it."
          ),
          /* @__PURE__ */ import_react71.default.createElement("div", null, /* @__PURE__ */ import_react71.default.createElement(ExampleImplementation, null))
        )
      )
    )
  );
}, "ConfigErrorPage");
var ExampleImplementation = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ import_react71.default.createElement(
    "pre",
    {
      style: {
        display: "block",
        overflowX: "auto",
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "24px",
        backgroundColor: "#14141F",
        color: "#E5ECF2",
        padding: "16px",
        margin: "0",
        maxHeight: "400px",
        overflow: "auto"
      }
    },
    /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FF7B72" } }, "import"),
    " ",
    "{",
    " Refine, WelcomePage",
    " ",
    "}",
    " ",
    /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FF7B72" } }, "from"),
    " ",
    /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#A5D6FF" } }, '"@refinedev/core"'),
    ";",
    "\n",
    "\n",
    /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FF7B72" } }, "export"),
    " ",
    /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FF7B72" } }, "default"),
    " ",
    /* @__PURE__ */ import_react71.default.createElement("span", null, /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FF7B72" } }, "function"), " ", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FFA657" } }, "App"), "(", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "rgb(222, 147, 95)" } }), ")", " "),
    "{",
    "\n",
    "  ",
    /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#FF7B72" } }, "return"),
    " (",
    "\n",
    "    ",
    /* @__PURE__ */ import_react71.default.createElement("span", null, /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#79C0FF" } }, "<", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#79C0FF" } }, "Refine"), "\n", "      ", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#E5ECF2", opacity: 0.6 } }, "// ", /* @__PURE__ */ import_react71.default.createElement("span", null, "...")), "\n", "    ", ">"), "\n", "      ", /* @__PURE__ */ import_react71.default.createElement("span", { style: { opacity: 0.6 } }, "{", "/* ... */", "}"), "\n", "      ", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#79C0FF" } }, "<", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#79C0FF" } }, "WelcomePage"), " />"), "\n", "      ", /* @__PURE__ */ import_react71.default.createElement("span", { style: { opacity: 0.6 } }, "{", "/* ... */", "}"), "\n", "    ", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#79C0FF" } }, "</", /* @__PURE__ */ import_react71.default.createElement("span", { style: { color: "#79C0FF" } }, "Refine"), ">")),
    "\n",
    "  ",
    ");",
    "\n",
    "}"
  );
}, "ExampleImplementation");
var ErrorGradient = /* @__PURE__ */ __name((props) => /* @__PURE__ */ import_react71.default.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 204,
    height: 56,
    viewBox: "0 0 204 56",
    fill: "none",
    ...props
  },
  /* @__PURE__ */ import_react71.default.createElement("path", { fill: "url(#welcome-page-error-gradient-a)", d: "M12 0H0v12L12 0Z" }),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-b)",
      d: "M28 0h-8L0 20v8L28 0Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-c)",
      d: "M36 0h8L0 44v-8L36 0Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-d)",
      d: "M60 0h-8L0 52v4h4L60 0Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-e)",
      d: "M68 0h8L20 56h-8L68 0Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-f)",
      d: "M92 0h-8L28 56h8L92 0Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-g)",
      d: "M100 0h8L52 56h-8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-h)",
      d: "M124 0h-8L60 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-i)",
      d: "M140 0h-8L76 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-j)",
      d: "M132 0h8L84 56h-8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-k)",
      d: "M156 0h-8L92 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-l)",
      d: "M164 0h8l-56 56h-8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-m)",
      d: "M188 0h-8l-56 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-n)",
      d: "M204 0h-8l-56 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement("defs", null, /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-a",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-b",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-c",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-d",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-e",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-f",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-g",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-h",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-i",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-j",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-k",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-l",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-m",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ import_react71.default.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-n",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react71.default.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ import_react71.default.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ))
), "ErrorGradient");
var ErrorIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ import_react71.default.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    ...props
  },
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "#FF4C4D",
      fillRule: "evenodd",
      d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ import_react71.default.createElement(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M7 8a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v3Zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
      clipRule: "evenodd"
    }
  )
), "ErrorIcon");

// src/components/pages/welcome/index.tsx
var WelcomePage = /* @__PURE__ */ __name(() => {
  const { __initialized } = useRefineContext();
  return /* @__PURE__ */ import_react72.default.createElement(import_react72.default.Fragment, null, /* @__PURE__ */ import_react72.default.createElement(ConfigSuccessPage, null), !__initialized && /* @__PURE__ */ import_react72.default.createElement(ConfigErrorPage, null));
}, "WelcomePage");

// src/components/containers/refine/index.tsx
var import_react76 = __toESM(require("react"));
var import_react_query27 = require("@tanstack/react-query");
var import_devtools_internal25 = require("@refinedev/devtools-internal");

// src/components/telemetry/index.tsx
var import_react74 = __toESM(require("react"));

// src/hooks/useTelemetryData/index.ts
var import_react73 = require("react");
var REFINE_VERSION = "4.48.0";
var useTelemetryData = /* @__PURE__ */ __name(() => {
  var _a;
  const auth = useIsExistAuthentication();
  const auditLogContext = (0, import_react73.useContext)(AuditLogContext);
  const liveContext = (0, import_react73.useContext)(LiveContext);
  const routerContext = (0, import_react73.useContext)(RouterContext);
  const dataContext = (0, import_react73.useContext)(DataContext);
  const { i18nProvider } = (0, import_react73.useContext)(TranslationContext);
  const notificationContext = (0, import_react73.useContext)(NotificationContext);
  const accessControlContext = (0, import_react73.useContext)(AccessControlContext);
  const { resources } = useResource();
  const refineOptions = useRefineContext();
  const auditLog = !!auditLogContext.create || !!auditLogContext.get || !!auditLogContext.update;
  const live = !!(liveContext == null ? void 0 : liveContext.publish) || !!(liveContext == null ? void 0 : liveContext.subscribe) || !!(liveContext == null ? void 0 : liveContext.unsubscribe);
  const router = !!routerContext.useHistory || !!routerContext.Link || !!routerContext.Prompt || !!routerContext.useLocation || !!routerContext.useParams;
  const data = !!dataContext;
  const i18n = !!(i18nProvider == null ? void 0 : i18nProvider.changeLocale) || !!(i18nProvider == null ? void 0 : i18nProvider.getLocale) || !!(i18nProvider == null ? void 0 : i18nProvider.translate);
  const notification = !!notificationContext.close || !!notificationContext.open;
  const accessControl = !!accessControlContext.can;
  const projectId = (_a = refineOptions == null ? void 0 : refineOptions.options) == null ? void 0 : _a.projectId;
  return {
    providers: {
      auth,
      auditLog,
      live,
      router,
      data,
      i18n,
      notification,
      accessControl
    },
    version: REFINE_VERSION,
    resourceCount: resources.length,
    projectId
  };
}, "useTelemetryData");

// src/components/telemetry/index.tsx
var encode = /* @__PURE__ */ __name((payload) => {
  try {
    const stringifiedPayload = JSON.stringify(payload || {});
    if (typeof btoa !== "undefined") {
      return btoa(stringifiedPayload);
    }
    return Buffer.from(stringifiedPayload).toString("base64");
  } catch (err) {
    return void 0;
  }
}, "encode");
var throughImage = /* @__PURE__ */ __name((src) => {
  const img = new Image();
  img.src = src;
}, "throughImage");
var throughFetch = /* @__PURE__ */ __name((src) => {
  fetch(src);
}, "throughFetch");
var transport = /* @__PURE__ */ __name((src) => {
  if (typeof Image !== "undefined") {
    throughImage(src);
  } else if (typeof fetch !== "undefined") {
    throughFetch(src);
  }
}, "transport");
var Telemetry = /* @__PURE__ */ __name(() => {
  const payload = useTelemetryData();
  const sent = import_react74.default.useRef(false);
  import_react74.default.useEffect(() => {
    if (sent.current) {
      return;
    }
    const encoded = encode(payload);
    if (!encoded) {
      return;
    }
    transport(`https://telemetry.refine.dev/telemetry?payload=${encoded}`);
    sent.current = true;
  }, []);
  return null;
}, "Telemetry");

// src/definitions/helpers/check-router-prop-misuse/index.ts
var checkRouterPropMisuse = /* @__PURE__ */ __name((value) => {
  const bindings = ["go", "parse", "back", "Link"];
  const otherProps = Object.keys(value).filter(
    (key) => !bindings.includes(key)
  );
  const hasOtherProps = otherProps.length > 0;
  if (hasOtherProps) {
    console.warn(
      `Unsupported properties are found in \`routerProvider\` prop. You provided \`${otherProps.join(
        ", "
      )}\`. Supported properties are \`${bindings.join(
        ", "
      )}\`. You may wanted to use \`legacyRouterProvider\` prop instead.`
    );
    return true;
  }
  return false;
}, "checkRouterPropMisuse");

// src/hooks/router/use-router-misuse-warning/index.ts
var import_react75 = __toESM(require("react"));
var useRouterMisuseWarning = /* @__PURE__ */ __name((value) => {
  const warned = import_react75.default.useRef(false);
  import_react75.default.useEffect(() => {
    if (warned.current === false) {
      if (value) {
        const warn = checkRouterPropMisuse(value);
        if (warn) {
          warned.current = true;
        }
      }
    }
  }, [value]);
}, "useRouterMisuseWarning");

// src/components/containers/refine/index.tsx
var Refine = /* @__PURE__ */ __name(({
  legacyAuthProvider,
  authProvider,
  dataProvider,
  legacyRouterProvider,
  routerProvider,
  notificationProvider,
  accessControlProvider,
  auditLogProvider,
  resources,
  DashboardPage,
  ReadyPage: ReadyPage2,
  LoginPage: LoginPage3,
  catchAll,
  children,
  liveProvider,
  i18nProvider,
  Title,
  Layout,
  Sider,
  Header,
  Footer,
  OffLayoutArea,
  onLiveEvent,
  options
}) => {
  const {
    optionsWithDefaults,
    disableTelemetryWithDefault,
    reactQueryWithDefaults
  } = handleRefineOptions({
    options
  });
  const queryClient = useDeepMemo(() => {
    var _a;
    if (reactQueryWithDefaults.clientConfig instanceof import_react_query27.QueryClient) {
      return reactQueryWithDefaults.clientConfig;
    }
    return new import_react_query27.QueryClient({
      ...reactQueryWithDefaults.clientConfig,
      defaultOptions: {
        ...reactQueryWithDefaults.clientConfig.defaultOptions,
        queries: {
          refetchOnWindowFocus: false,
          keepPreviousData: true,
          ...(_a = reactQueryWithDefaults.clientConfig.defaultOptions) == null ? void 0 : _a.queries
        }
      }
    });
  }, [reactQueryWithDefaults.clientConfig]);
  (0, import_devtools_internal25.useQuerySubscription)(queryClient);
  const useNotificationProviderValues = import_react76.default.useMemo(() => {
    return typeof notificationProvider === "function" ? notificationProvider : () => notificationProvider ?? {};
  }, [notificationProvider]);
  const notificationProviderContextValues = useNotificationProviderValues();
  useRouterMisuseWarning(routerProvider);
  if (legacyRouterProvider && !routerProvider && (resources ?? []).length === 0) {
    return ReadyPage2 ? /* @__PURE__ */ import_react76.default.createElement(ReadyPage2, null) : /* @__PURE__ */ import_react76.default.createElement(ReadyPage, null);
  }
  const { RouterComponent = import_react76.default.Fragment } = !routerProvider ? legacyRouterProvider ?? {} : {};
  return /* @__PURE__ */ import_react76.default.createElement(import_react_query27.QueryClientProvider, { client: queryClient }, /* @__PURE__ */ import_react76.default.createElement(NotificationContextProvider, { ...notificationProviderContextValues }, /* @__PURE__ */ import_react76.default.createElement(
    LegacyAuthContextProvider,
    {
      ...legacyAuthProvider ?? {},
      isProvided: Boolean(legacyAuthProvider)
    },
    /* @__PURE__ */ import_react76.default.createElement(
      AuthBindingsContextProvider,
      {
        ...authProvider ?? {},
        isProvided: Boolean(authProvider)
      },
      /* @__PURE__ */ import_react76.default.createElement(DataContextProvider, { ...dataProvider }, /* @__PURE__ */ import_react76.default.createElement(LiveContextProvider, { liveProvider }, /* @__PURE__ */ import_react76.default.createElement(
        RouterPickerProvider,
        {
          value: legacyRouterProvider && !routerProvider ? "legacy" : "new"
        },
        /* @__PURE__ */ import_react76.default.createElement(RouterBindingsProvider, { router: routerProvider }, /* @__PURE__ */ import_react76.default.createElement(LegacyRouterContextProvider, { ...legacyRouterProvider }, /* @__PURE__ */ import_react76.default.createElement(ResourceContextProvider, { resources: resources ?? [] }, /* @__PURE__ */ import_react76.default.createElement(TranslationContextProvider, { i18nProvider }, /* @__PURE__ */ import_react76.default.createElement(
          AccessControlContextProvider,
          {
            ...accessControlProvider ?? {}
          },
          /* @__PURE__ */ import_react76.default.createElement(
            AuditLogContextProvider,
            {
              ...auditLogProvider ?? {}
            },
            /* @__PURE__ */ import_react76.default.createElement(UndoableQueueContextProvider, null, /* @__PURE__ */ import_react76.default.createElement(
              RefineContextProvider,
              {
                mutationMode: optionsWithDefaults.mutationMode,
                warnWhenUnsavedChanges: optionsWithDefaults.warnWhenUnsavedChanges,
                syncWithLocation: optionsWithDefaults.syncWithLocation,
                Title,
                undoableTimeout: optionsWithDefaults.undoableTimeout,
                catchAll,
                DashboardPage,
                LoginPage: LoginPage3,
                Layout,
                Sider,
                Footer,
                Header,
                OffLayoutArea,
                hasDashboard: !!DashboardPage,
                liveMode: optionsWithDefaults.liveMode,
                onLiveEvent,
                options: optionsWithDefaults
              },
              /* @__PURE__ */ import_react76.default.createElement(UnsavedWarnContextProvider, null, /* @__PURE__ */ import_react76.default.createElement(RouterComponent, null, children, !disableTelemetryWithDefault && /* @__PURE__ */ import_react76.default.createElement(Telemetry, null), /* @__PURE__ */ import_react76.default.createElement(RouteChangeHandler, null)))
            ))
          )
        )))))
      )))
    )
  )));
}, "Refine");

// src/components/undoableQueue/index.tsx
var import_react77 = require("react");
var UndoableQueue = /* @__PURE__ */ __name(({ notification }) => {
  const translate = useTranslate();
  const { notificationDispatch } = useCancelNotification();
  const { open } = useNotification();
  const [timeoutId, setTimeoutId] = (0, import_react77.useState)();
  const cancelNotification = /* @__PURE__ */ __name(() => {
    if (notification.isRunning === true) {
      if (notification.seconds === 0) {
        notification.doMutation();
      }
      if (!notification.isSilent) {
        open == null ? void 0 : open({
          key: `${notification.id}-${notification.resource}-notification`,
          type: "progress",
          message: translate(
            "notifications.undoable",
            {
              seconds: userFriendlySecond(notification.seconds)
            },
            `You have ${userFriendlySecond(
              notification.seconds
            )} seconds to undo`
          ),
          cancelMutation: notification.cancelMutation,
          undoableTimeout: userFriendlySecond(notification.seconds)
        });
      }
      if (notification.seconds > 0) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          notificationDispatch({
            type: "DECREASE_NOTIFICATION_SECOND" /* DECREASE_NOTIFICATION_SECOND */,
            payload: {
              id: notification.id,
              seconds: notification.seconds,
              resource: notification.resource
            }
          });
        }, 1e3);
        setTimeoutId(newTimeoutId);
      }
    }
  }, "cancelNotification");
  (0, import_react77.useEffect)(() => {
    cancelNotification();
  }, [notification]);
  return null;
}, "UndoableQueue");

// src/components/layoutWrapper/index.tsx
var import_react78 = __toESM(require("react"));
var LayoutWrapper = /* @__PURE__ */ __name(({
  children,
  Layout: LayoutFromProps,
  Sider: SiderFromProps,
  Header: HeaderFromProps,
  Title: TitleFromProps,
  Footer: FooterFromProps,
  OffLayoutArea: OffLayoutAreaFromProps
}) => {
  const { Layout, Footer, Header, Sider, Title, OffLayoutArea } = useRefineContext();
  const LayoutToRender = LayoutFromProps ?? Layout;
  return /* @__PURE__ */ import_react78.default.createElement(
    LayoutToRender,
    {
      Sider: SiderFromProps ?? Sider,
      Header: HeaderFromProps ?? Header,
      Footer: FooterFromProps ?? Footer,
      Title: TitleFromProps ?? Title,
      OffLayoutArea: OffLayoutAreaFromProps ?? OffLayoutArea
    },
    children,
    /* @__PURE__ */ import_react78.default.createElement(UnsavedPrompt, null)
  );
}, "LayoutWrapper");
var UnsavedPrompt = /* @__PURE__ */ __name(() => {
  const { Prompt } = useRouterContext();
  const translate = useTranslate();
  const { warnWhen, setWarnWhen } = useWarnAboutChange();
  const warnWhenListener = /* @__PURE__ */ __name((e) => {
    e.preventDefault();
    e.returnValue = translate(
      "warnWhenUnsavedChanges",
      "Are you sure you want to leave? You have unsaved changes."
    );
    return e.returnValue;
  }, "warnWhenListener");
  (0, import_react78.useEffect)(() => {
    if (warnWhen) {
      window.addEventListener("beforeunload", warnWhenListener);
    }
    return window.removeEventListener("beforeunload", warnWhenListener);
  }, [warnWhen]);
  return /* @__PURE__ */ import_react78.default.createElement(
    Prompt,
    {
      when: warnWhen,
      message: translate(
        "warnWhenUnsavedChanges",
        "Are you sure you want to leave? You have unsaved changes."
      ),
      setWarnWhen
    }
  );
}, "UnsavedPrompt");

// src/components/authenticated/index.tsx
var import_react79 = __toESM(require("react"));
function Authenticated({
  redirectOnFail = true,
  appendCurrentPathToQuery = true,
  children,
  fallback: fallbackContent,
  loading: loadingContent
}) {
  var _a;
  const activeAuthProvider = useActiveAuthProvider();
  const routerType = useRouterType();
  const hasAuthProvider = Boolean(activeAuthProvider == null ? void 0 : activeAuthProvider.isProvided);
  const isLegacyAuth = Boolean(activeAuthProvider == null ? void 0 : activeAuthProvider.isLegacy);
  const isLegacyRouter = routerType === "legacy";
  const parsed = useParsed();
  const go = useGo();
  const { useLocation } = useRouterContext();
  const legacyLocation = useLocation();
  const {
    isFetching,
    isSuccess,
    data: {
      authenticated: isAuthenticatedStatus,
      redirectTo: authenticatedRedirect
    } = {}
  } = useIsAuthenticated({
    v3LegacyAuthProviderCompatible: isLegacyAuth
  });
  const isAuthenticated = hasAuthProvider ? isLegacyAuth ? isSuccess : isAuthenticatedStatus : true;
  if (!hasAuthProvider) {
    return /* @__PURE__ */ import_react79.default.createElement(import_react79.default.Fragment, null, children ?? null);
  }
  if (isFetching) {
    return /* @__PURE__ */ import_react79.default.createElement(import_react79.default.Fragment, null, loadingContent ?? null);
  }
  if (isAuthenticated) {
    return /* @__PURE__ */ import_react79.default.createElement(import_react79.default.Fragment, null, children ?? null);
  }
  if (typeof fallbackContent !== "undefined") {
    return /* @__PURE__ */ import_react79.default.createElement(import_react79.default.Fragment, null, fallbackContent ?? null);
  }
  const appliedRedirect = isLegacyAuth ? typeof redirectOnFail === "string" ? redirectOnFail : "/login" : typeof redirectOnFail === "string" ? redirectOnFail : authenticatedRedirect;
  const pathname = `${isLegacyRouter ? legacyLocation == null ? void 0 : legacyLocation.pathname : parsed.pathname}`.replace(/(\?.*|#.*)$/, "");
  if (appliedRedirect) {
    if (isLegacyRouter) {
      const toQuery = appendCurrentPathToQuery ? `?to=${encodeURIComponent(pathname)}` : "";
      return /* @__PURE__ */ import_react79.default.createElement(RedirectLegacy, { to: `${appliedRedirect}${toQuery}` });
    }
    return /* @__PURE__ */ import_react79.default.createElement(
      Redirect,
      {
        config: {
          to: appliedRedirect,
          query: appendCurrentPathToQuery ? {
            to: ((_a = parsed.params) == null ? void 0 : _a.to) ? parsed.params.to : go({
              to: pathname,
              options: { keepQuery: true },
              type: "path"
            })
          } : void 0,
          type: "replace"
        }
      }
    );
  }
  return null;
}
__name(Authenticated, "Authenticated");
var Redirect = /* @__PURE__ */ __name(({ config }) => {
  const go = useGo();
  import_react79.default.useEffect(() => {
    go(config);
  }, [go, config]);
  return null;
}, "Redirect");
var RedirectLegacy = /* @__PURE__ */ __name(({ to }) => {
  const { replace } = useNavigation();
  import_react79.default.useEffect(() => {
    replace(to);
  }, [replace, to]);
  return null;
}, "RedirectLegacy");

// src/components/routeChangeHandler/index.tsx
var import_react80 = require("react");
var RouteChangeHandler = /* @__PURE__ */ __name(() => {
  const { useLocation } = useRouterContext();
  const { checkAuth } = useLegacyAuthContext();
  const location = useLocation();
  (0, import_react80.useEffect)(() => {
    checkAuth == null ? void 0 : checkAuth().catch(() => false);
  }, [location == null ? void 0 : location.pathname]);
  return null;
}, "RouteChangeHandler");

// src/components/canAccess/index.tsx
var import_react81 = __toESM(require("react"));
var CanAccess = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  action: actionFromProp,
  params: paramsFromProp,
  fallback,
  onUnauthorized,
  children,
  queryOptions: componentQueryOptions,
  ...rest
}) => {
  const {
    resource,
    id: idFromRoute,
    action: actionFromRoute
  } = useResource(resourceFromProp);
  const { identifier } = useResource();
  const getDefaultId = /* @__PURE__ */ __name(() => {
    const idFromPropsOrRoute = (paramsFromProp == null ? void 0 : paramsFromProp.id) ?? idFromRoute;
    if (resourceFromProp && resourceFromProp !== identifier) {
      return paramsFromProp == null ? void 0 : paramsFromProp.id;
    }
    return idFromPropsOrRoute;
  }, "getDefaultId");
  const defaultId = getDefaultId();
  const resourceName = resourceFromProp ?? (resource == null ? void 0 : resource.name);
  const action = actionFromProp ?? actionFromRoute ?? "";
  const params = paramsFromProp ?? {
    id: defaultId,
    resource
  };
  const { data } = useCan({
    resource: resourceName,
    action,
    params,
    queryOptions: componentQueryOptions
  });
  (0, import_react81.useEffect)(() => {
    if (onUnauthorized && (data == null ? void 0 : data.can) === false) {
      onUnauthorized({
        resource: resourceName,
        action,
        reason: data == null ? void 0 : data.reason,
        params
      });
    }
  }, [data == null ? void 0 : data.can]);
  if (data == null ? void 0 : data.can) {
    if (import_react81.default.isValidElement(children)) {
      const Children = import_react81.default.cloneElement(children, rest);
      return Children;
    }
    return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, children);
  }
  if ((data == null ? void 0 : data.can) === false) {
    return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, fallback ?? null);
  }
  return null;
}, "CanAccess");

// src/components/gh-banner/index.tsx
var import_react82 = __toESM(require("react"));

// src/components/gh-banner/styles.ts
var CSSRules = [
  `
    .bg-top-announcement {
        border-bottom: 1px solid rgba(71, 235, 235, 0.15);
        background: radial-gradient(
                218.19% 111.8% at 0% 0%,
                rgba(71, 235, 235, 0.1) 0%,
                rgba(71, 235, 235, 0.2) 100%
            ),
            #14141f;
    }
    `,
  `
    .top-announcement-mask {
        mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        -webkit-mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        mask-repeat: repeat;
        -webkit-mask-repeat: repeat;
        background: rgba(71, 235, 235, 0.25);
    }
    `,
  `
    .banner {
        display: flex;
        @media (max-width: 1000px) {
            display: none;
        }
    }`,
  `
    .gh-link, .gh-link:hover, .gh-link:active, .gh-link:visited, .gh-link:focus {
        text-decoration: none;
        z-index: 9;
    }
    `,
  `
    @keyframes top-announcement-glow {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    `
];

// src/components/gh-banner/index.tsx
var text = "If you find Refine useful, you can contribute to its growth by giving it a star on GitHub";
var GitHubBanner = /* @__PURE__ */ __name(() => {
  (0, import_react82.useEffect)(() => {
    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    CSSRules.forEach(
      (rule) => {
        var _a;
        return (_a = styleTag.sheet) == null ? void 0 : _a.insertRule(rule, styleTag.sheet.cssRules.length);
      }
    );
  }, []);
  return /* @__PURE__ */ import_react82.default.createElement(
    "div",
    {
      className: "banner bg-top-announcement",
      style: {
        width: "100%",
        height: "48px"
      }
    },
    /* @__PURE__ */ import_react82.default.createElement(
      "div",
      {
        style: {
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "200px",
          width: "100%",
          maxWidth: "100vw",
          height: "100%",
          borderBottom: "1px solid #47ebeb26"
        }
      },
      /* @__PURE__ */ import_react82.default.createElement(
        "div",
        {
          className: "top-announcement-mask",
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderBottom: "1px solid #47ebeb26"
          }
        },
        /* @__PURE__ */ import_react82.default.createElement(
          "div",
          {
            style: {
              position: "relative",
              width: "960px",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto"
            }
          },
          /* @__PURE__ */ import_react82.default.createElement(
            "div",
            {
              style: {
                width: "calc(50% - 300px)",
                height: "100%",
                position: "relative"
              }
            },
            /* @__PURE__ */ import_react82.default.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "1.5s",
                  position: "absolute",
                  top: "2px",
                  right: "220px"
                },
                id: "1"
              }
            ),
            /* @__PURE__ */ import_react82.default.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "1s",
                  position: "absolute",
                  top: "8px",
                  right: "100px",
                  transform: "rotate(180deg)"
                },
                id: "2"
              }
            ),
            /* @__PURE__ */ import_react82.default.createElement(
              GlowBig,
              {
                style: {
                  position: "absolute",
                  right: "10px"
                },
                id: "3"
              }
            )
          ),
          /* @__PURE__ */ import_react82.default.createElement(
            "div",
            {
              style: {
                width: "calc(50% - 300px)",
                height: "100%",
                position: "relative"
              }
            },
            /* @__PURE__ */ import_react82.default.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "2s",
                  position: "absolute",
                  top: "6px",
                  right: "180px",
                  transform: "rotate(180deg)"
                },
                id: "4"
              }
            ),
            /* @__PURE__ */ import_react82.default.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "0.5s",
                  transitionDelay: "1.3s",
                  position: "absolute",
                  top: "2px",
                  right: "40px"
                },
                id: "5"
              }
            ),
            /* @__PURE__ */ import_react82.default.createElement(
              GlowBig,
              {
                style: {
                  position: "absolute",
                  right: "-70px"
                },
                id: "6"
              }
            )
          )
        )
      ),
      /* @__PURE__ */ import_react82.default.createElement(Text, { text })
    )
  );
}, "GitHubBanner");
var Text = /* @__PURE__ */ __name(({ text: text2 }) => {
  return /* @__PURE__ */ import_react82.default.createElement(
    "a",
    {
      className: "gh-link",
      href: "https://s.refine.dev/github-support",
      target: "_blank",
      rel: "noreferrer",
      style: {
        position: "absolute",
        height: "100%",
        padding: "0 60px",
        display: "flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)"
      }
    },
    /* @__PURE__ */ import_react82.default.createElement(
      "div",
      {
        style: {
          color: "#fff",
          display: "flex",
          flexDirection: "row",
          gap: "8px"
        }
      },
      /* @__PURE__ */ import_react82.default.createElement(
        "span",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        "\u2B50\uFE0F"
      ),
      /* @__PURE__ */ import_react82.default.createElement(
        "span",
        {
          className: "text",
          style: {
            fontSize: "16px",
            lineHeight: "24px"
          }
        },
        text2
      ),
      /* @__PURE__ */ import_react82.default.createElement(
        "span",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        "\u2B50\uFE0F"
      )
    )
  );
}, "Text");
var GlowSmall = /* @__PURE__ */ __name(({ style, ...props }) => {
  return /* @__PURE__ */ import_react82.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 80,
      height: 40,
      fill: "none",
      style: {
        opacity: 1,
        animation: "top-announcement-glow 1s ease-in-out infinite alternate",
        ...style
      }
    },
    /* @__PURE__ */ import_react82.default.createElement("circle", { cx: 40, r: 40, fill: `url(#${props.id}-a)`, fillOpacity: 0.5 }),
    /* @__PURE__ */ import_react82.default.createElement("defs", null, /* @__PURE__ */ import_react82.default.createElement(
      "radialGradient",
      {
        id: `${props.id}-a`,
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "matrix(0 40 -40 0 40 0)",
        gradientUnits: "userSpaceOnUse"
      },
      /* @__PURE__ */ import_react82.default.createElement("stop", { stopColor: "#47EBEB" }),
      /* @__PURE__ */ import_react82.default.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })
    ))
  );
}, "GlowSmall");
var GlowBig = /* @__PURE__ */ __name(({ style, ...props }) => /* @__PURE__ */ import_react82.default.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 120,
    height: 48,
    fill: "none",
    ...props,
    style: {
      opacity: 1,
      animation: "top-announcement-glow 1s ease-in-out infinite alternate",
      ...style
    }
  },
  /* @__PURE__ */ import_react82.default.createElement(
    "circle",
    {
      cx: 60,
      cy: 24,
      r: 60,
      fill: `url(#${props.id}-a)`,
      fillOpacity: 0.5
    }
  ),
  /* @__PURE__ */ import_react82.default.createElement("defs", null, /* @__PURE__ */ import_react82.default.createElement(
    "radialGradient",
    {
      id: `${props.id}-a`,
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "matrix(0 60 -60 0 60 24)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ import_react82.default.createElement("stop", { stopColor: "#47EBEB" }),
    /* @__PURE__ */ import_react82.default.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })
  ))
), "GlowBig");

// src/components/autoSaveIndicator/index.tsx
var import_react83 = __toESM(require("react"));
var AutoSaveIndicator = /* @__PURE__ */ __name(({
  status,
  elements: {
    success = /* @__PURE__ */ import_react83.default.createElement(Message, { key: "autoSave.success", defaultMessage: "saved" }),
    error = /* @__PURE__ */ import_react83.default.createElement(Message, { key: "autoSave.error", defaultMessage: "auto save failure" }),
    loading = /* @__PURE__ */ import_react83.default.createElement(Message, { key: "autoSave.loading", defaultMessage: "saving..." }),
    idle = /* @__PURE__ */ import_react83.default.createElement(Message, { key: "autoSave.idle", defaultMessage: "waiting for changes" })
  } = {}
}) => {
  switch (status) {
    case "success":
      return /* @__PURE__ */ import_react83.default.createElement(import_react83.default.Fragment, null, success);
    case "error":
      return /* @__PURE__ */ import_react83.default.createElement(import_react83.default.Fragment, null, error);
    case "loading":
      return /* @__PURE__ */ import_react83.default.createElement(import_react83.default.Fragment, null, loading);
    default:
      return /* @__PURE__ */ import_react83.default.createElement(import_react83.default.Fragment, null, idle);
  }
}, "AutoSaveIndicator");
var Message = /* @__PURE__ */ __name(({
  key,
  defaultMessage
}) => {
  const translate = useTranslate();
  return /* @__PURE__ */ import_react83.default.createElement("span", null, translate(key, defaultMessage));
}, "Message");
//# sourceMappingURL=index.js.map