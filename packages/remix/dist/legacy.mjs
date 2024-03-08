// src/legacy/routerProvider.ts
import { Link, useLocation, useNavigate } from "@remix-run/react";

// src/legacy/prompt.tsx
import React from "react";
import { useBlocker } from "@remix-run/react";
var Prompt = ({
  message,
  when,
  setWarnWhen
}) => {
  const blocker = React.useCallback(() => {
    if (when) {
      if (window.confirm(message)) {
        setWarnWhen == null ? void 0 : setWarnWhen(false);
        return false;
      }
      return true;
    }
    return false;
  }, [when, message, setWarnWhen]);
  useBlocker(blocker);
  return null;
};

// src/legacy/useParams.ts
import {
  handleUseParams
} from "@refinedev/core";
import { useParams as useRemixParams } from "@remix-run/react";
var actions = ["clone", "create", "edit", "show"];
var isAction = (param) => {
  return actions.includes(param);
};
var lastActionIndex = (params) => {
  const reversedFirstIndex = params.slice().reverse().findIndex(isAction);
  if (reversedFirstIndex === -1) {
    return -1;
  }
  return params.length - reversedFirstIndex - 1;
};
var composeParams = (params) => {
  const actionIndex = lastActionIndex(params);
  if (actionIndex !== -1 && actionIndex !== 0) {
    const resource2 = params.slice(0, actionIndex).join("/");
    const action = params[actionIndex];
    const id = params[actionIndex + 1];
    return {
      resource: resource2,
      action,
      id
    };
  }
  const resource = params.join("/");
  return {
    resource,
    action: void 0
  };
};
var handleRefineParams = (refineSplat) => {
  if (refineSplat) {
    const params = refineSplat.split("/").filter(Boolean);
    return composeParams(params);
  }
  return {};
};
var useParams = () => {
  const params = useRemixParams();
  return handleUseParams({
    ...handleRefineParams(params["*"]),
    ...params
  });
};

// src/legacy/routerProvider.ts
var RouterProvider = {
  useHistory: () => {
    const navigate = useNavigate();
    return {
      push: navigate,
      replace: (path) => {
        navigate(path, { replace: true });
      },
      goBack: () => {
        navigate(-1);
      }
    };
  },
  useLocation: () => {
    const location = useLocation();
    return location;
  },
  useParams,
  Prompt,
  Link
};

// src/legacy/checkAuthentication.ts
import { redirect } from "@remix-run/node";
var checkAuthentication = async (authProvider, request, redirectTo = new URL(request.url).pathname) => {
  var _a;
  try {
    const user = await ((_a = authProvider.checkAuth) == null ? void 0 : _a.call(authProvider, { request }));
    return user;
  } catch (error) {
    if (redirectTo !== "/login") {
      const { pathname } = new URL(request.url);
      if (pathname === "/") {
        throw redirect("/login");
      }
      const searchParams = new URLSearchParams([["to", redirectTo]]);
      throw redirect(`/login?${searchParams}`);
    }
  }
};

// src/legacy/routeComponent.tsx
import React2, { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import {
  useRefineContext,
  LayoutWrapper,
  ErrorComponent,
  useResource,
  LoginPage as DefaultLoginPage,
  CanAccess
} from "@refinedev/core";
var { useHistory, useLocation: useLocation2, useParams: useParams2 } = RouterProvider;
function RemixRouteComponent({ children: _children, ...rest }) {
  const loaderData = useLoaderData();
  const { resources } = useResource();
  const { push } = useHistory();
  const {
    resource: routeResourceName,
    action,
    id
  } = useParams2();
  const { pathname } = useLocation2();
  const { DashboardPage, catchAll, LoginPage } = useRefineContext();
  const resource = resources.find(
    (res) => res.name === routeResourceName || res.route === routeResourceName
  );
  useEffect(() => {
    var _a;
    if (pathname === "/" && !DashboardPage) {
      if (typeof this !== "undefined" && this.initialRoute) {
        push(
          this.initialRoute.startsWith("/") ? this.initialRoute : `/${this.initialRoute}`
        );
      } else {
        push(`/${(_a = resources[0].route) == null ? void 0 : _a.replace(/^\//, "")}`);
      }
    }
  }, [pathname]);
  const renderLoginRouteElement = () => {
    if (LoginPage)
      return /* @__PURE__ */ React2.createElement(LoginPage, null);
    return /* @__PURE__ */ React2.createElement(DefaultLoginPage, null);
  };
  if (routeResourceName === "login") {
    return renderLoginRouteElement();
  }
  if (pathname === "/") {
    if (DashboardPage) {
      return /* @__PURE__ */ React2.createElement(LayoutWrapper, null, /* @__PURE__ */ React2.createElement(
        CanAccess,
        {
          resource: "dashboard",
          action: "list",
          fallback: catchAll ?? /* @__PURE__ */ React2.createElement(ErrorComponent, null)
        },
        /* @__PURE__ */ React2.createElement(DashboardPage, null)
      ));
    }
    return null;
  }
  if (resource) {
    const {
      list,
      create,
      edit,
      show,
      name,
      canCreate,
      canEdit,
      canShow,
      canDelete,
      options
    } = resource;
    const stringError = () => console.error(
      "`string` resource routes are not supported in legacy router. Please switch to the new router or assign Components to the resource routes."
    );
    const definitionError = () => console.error(
      "`Object` resource routes are not supported in legacy router. Please switch to the new router or assign Components to the resource routes."
    );
    const List = (typeof list === "string" ? stringError() : typeof list === "object" ? definitionError() : list) ?? (() => null);
    const Create = (typeof create === "string" ? stringError() : typeof create === "object" ? definitionError() : create) ?? (() => null);
    const Edit = (typeof edit === "string" ? stringError() : typeof edit === "object" ? definitionError() : edit) ?? (() => null);
    const Show = (typeof show === "string" ? stringError() : typeof show === "object" ? definitionError() : show) ?? (() => null);
    const renderCrud = () => {
      switch (action) {
        case void 0: {
          return /* @__PURE__ */ React2.createElement(
            CanAccess,
            {
              resource: name,
              action: "list",
              fallback: catchAll ?? /* @__PURE__ */ React2.createElement(ErrorComponent, null)
            },
            /* @__PURE__ */ React2.createElement(
              List,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
        case "create":
        case "clone": {
          return /* @__PURE__ */ React2.createElement(
            CanAccess,
            {
              resource: name,
              action: "create",
              fallback: catchAll ?? /* @__PURE__ */ React2.createElement(ErrorComponent, null)
            },
            /* @__PURE__ */ React2.createElement(
              Create,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
        case "edit": {
          return /* @__PURE__ */ React2.createElement(
            CanAccess,
            {
              resource: name,
              action: "edit",
              params: { id },
              fallback: catchAll ?? /* @__PURE__ */ React2.createElement(ErrorComponent, null)
            },
            /* @__PURE__ */ React2.createElement(
              Edit,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
        case "show": {
          return /* @__PURE__ */ React2.createElement(
            CanAccess,
            {
              resource: name,
              action: "show",
              params: { id },
              fallback: catchAll ?? /* @__PURE__ */ React2.createElement(ErrorComponent, null)
            },
            /* @__PURE__ */ React2.createElement(
              Show,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
      }
    };
    return /* @__PURE__ */ React2.createElement(LayoutWrapper, null, renderCrud());
  }
  return catchAll ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, catchAll) : /* @__PURE__ */ React2.createElement(LayoutWrapper, null, /* @__PURE__ */ React2.createElement(ErrorComponent, null));
}

// src/legacy/index.ts
var legacy_default = RouterProvider;
export {
  RemixRouteComponent,
  checkAuthentication,
  legacy_default as default,
  handleRefineParams
};
//# sourceMappingURL=legacy.mjs.map