import{t as e}from"./index-CUcsWBF9.js";var t=e();function n(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Expand:r,Hero:a,LineDrawing:o,Pull:s,Section:c,TwoLevels:l}=n;return r||i(`Expand`,!0),a||i(`Hero`,!0),o||i(`LineDrawing`,!0),s||i(`Pull`,!0),c||i(`Section`,!0),l||i(`TwoLevels`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{eyebrow:`Vendor management · Sample 09`,title:`What has to be in a story so a developer never has to ask?`,subtitle:`Three user stories from the vendor management engagement, rewritten onto an anonymized domain. The writing is the exhibit here, not the features.`,side:`left`,children:(0,t.jsx)(o,{name:`story-writing`,alt:`A forearm holding out a single page.`})}),`
`,(0,t.jsx)(n.p,{children:`Three stories reproduced in full, from a set that ran to dozens of them.`}),`
`,(0,t.jsx)(l,{shortMinutes:3,detailMinutes:20}),`
`,(0,t.jsxs)(c,{id:`why-technical`,title:`Why these carry technical detail`,children:[(0,t.jsx)(n.p,{children:`These stories specify implementation, and that was the right call for this engagement rather than a habit I bring everywhere.`}),(0,t.jsx)(n.p,{children:`The same person held the business process consultant and the technical architect roles here, which is why they run to this depth. There was no handoff between the person who understood the process and the person who understood the platform, so the story could carry both.`}),(0,t.jsx)(n.p,{children:`Where a build team holds deep platform expertise, a story should stay at outcome level and stay out of the how. Specifying the mechanism for people who know the mechanism better than you do is not thoroughness, it is noise, and it quietly removes their ability to find a better answer than the one you imagined.`}),(0,t.jsxs)(n.p,{children:[`For the contrast, there is `,(0,t.jsx)(n.a,{href:`/fsm/backlog`,children:`a full outcome-only backlog`}),` written for a build team that needed the opposite.`]})]}),`
`,(0,t.jsxs)(c,{id:`standard`,title:`The standard`,children:[(0,t.jsx)(n.p,{children:`I wrote most of the story set for this project. It ran to nearly 200 stories, covering the fifteen lifecycle processes, the configuration model, the approval engine, and the integration layer underneath all of it.`}),(0,t.jsx)(n.p,{children:`The standard I hold a story to is simple: a developer who wasn't in any of the design conversations should be able to pick it up, build the thing, and not need me. The people building these stories weren't the people who sat through the workshops.`}),(0,t.jsx)(n.p,{children:`That standard is about self-sufficiency, not about detail. An outcome-only story satisfies it too, as long as what it asks for is unambiguous and testable. What changes with the team is how much of the how the story has to carry before "not need me" is true.`}),(0,t.jsx)(s,{children:`If a story only works when its author is in the room, it isn't a story, it's a reminder.`})]}),`
`,(0,t.jsxs)(c,{id:`habits`,title:`Four habits do most of the work`,children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Acceptance criteria a tester can execute.`}),` Given, when, then, with the actual field names, the actual values, and the actual expected result. "The form behaves correctly" is a wish, not a criterion.`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Out of scope written down.`}),` When a boundary came up in design, it goes in the story as a boundary. That way scope creep has to be a conversation rather than an assumption someone discovers halfway through a sprint.`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Upstream and downstream relationships named on every story.`}),` Writing those forces the dependency question at authoring time, which is well before sprint planning and much further before where dependencies usually surface, which is mid-build.`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Test steps written as steps.`}),` Numbered, data setup first, one expected result per step, tied back to the AC it proves. Anything vaguer is a hope.`]}),(0,t.jsx)(n.p,{children:`The last thing is harder to show in three samples: across a corpus this size, the structure has to be the same every time. Same sections, same order, same emphasis convention. A developer who has read one of these knows where to look in all of them, and a reviewer can tell at a glance which story is missing its test steps. That consistency is boring to maintain and it's most of what makes a large story set usable.`}),(0,t.jsx)(n.p,{children:`I picked these three for range: back-end derivation logic, security and governance, and user-facing form behavior. The formal register is deliberate. Requirements get read under pressure, and voice isn't the point.`})]}),`
`,(0,t.jsxs)(c,{id:`stories`,title:`Three stories, reproduced in full`,children:[(0,t.jsxs)(r,{title:`Story 1: Catalog Item Configuration – Variable Name Derivation Business Rule`,summary:`Back-end derivation logic. How far acceptance criteria have to go when the output is a computed value rather than a screen, including the branches that produce nothing`,minutes:8,children:[(0,t.jsx)(n.h3,{id:`description`,children:`Description`}),(0,t.jsxs)(n.p,{children:[`As a `,(0,t.jsx)(n.strong,{children:`ServiceNow Developer`}),`, I want a `,(0,t.jsx)(n.strong,{children:`Business Rule`}),` on the `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),` record that derives and stores comma-separated `,(0,t.jsx)(n.strong,{children:`variable name`}),` lists for requester and fulfiller handling so portal and fulfiller UIs can read a single set of *_names fields at runtime without extra server calls.`]}),(0,t.jsx)(n.h3,{id:`acceptance-criteria`,children:`Acceptance Criteria`}),(0,t.jsx)(n.h4,{id:`ac1`,children:`AC1`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` a Catalog Item Configuration record is `,(0,t.jsx)(n.strong,{children:`inserted or updated`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the Business Rule derives these fields as comma-separated lists of `,(0,t.jsx)(n.strong,{children:`variable names`}),` (machine name, not label), normalized (trimmed, de-duplicated, sorted), or `,(0,t.jsx)(n.strong,{children:`empty`}),` when no items apply:`]}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester`}),`: `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),`, `,(0,t.jsx)(n.code,{children:`u_requester_visible_names`}),`, `,(0,t.jsx)(n.code,{children:`u_requester_mandatory_names`})]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Fulfiller`}),`: `,(0,t.jsx)(n.code,{children:`u_fulfiller_read_only_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_mandatory_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_mandatory_names`})]}),`
`]}),(0,t.jsxs)(n.h4,{id:`ac2-requester-logic--conditional-on-u_new_or_update`,children:[`AC2 (Requester logic – conditional on `,(0,t.jsx)(n.code,{children:`u_new_or_update`}),`)`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` the requester list collectors contain only `,(0,t.jsx)(n.code,{children:`u_current_[attribute]`}),` variables, `,(0,t.jsx)(n.strong,{children:`when`}),` the BR runs, `,(0,t.jsx)(n.strong,{children:`then`}),` expand each selected `,(0,t.jsx)(n.code,{children:`u_current_X`}),` using the `,(0,t.jsx)(n.strong,{children:`New vs Update`}),` switch:`]}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[`If `,(0,t.jsx)(n.code,{children:`u_new_or_update`}),` = New`]})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester Read Only`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester Visible`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),` (context).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_left_X`})}),` → `,(0,t.jsx)(n.code,{children:`u_requester_visible_names`}),`. `,(0,t.jsxs)(n.em,{children:[`(Do `,(0,t.jsx)(n.strong,{children:`not`}),` map `,(0,t.jsx)(n.code,{children:`u_requested_right_X`}),`.)`]})]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester Mandatory`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),` (context).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_left_X`})}),` → `,(0,t.jsx)(n.code,{children:`u_requester_mandatory_names`}),` (mandatory; no default). `,(0,t.jsxs)(n.em,{children:[`(Do `,(0,t.jsx)(n.strong,{children:`not`}),` map `,(0,t.jsx)(n.code,{children:`u_requested_right_X`}),`.)`]})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[`If `,(0,t.jsx)(n.code,{children:`u_new_or_update`}),` = Update`]})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester Read Only`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester Visible`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),` (context).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_right_X`})}),` → `,(0,t.jsx)(n.code,{children:`u_requester_visible_names`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requester Mandatory`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),` (context).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_right_X`})}),` → `,(0,t.jsx)(n.code,{children:`u_requester_mandatory_names`}),` (mandatory; no default). `,(0,t.jsxs)(n.em,{children:[`(Do `,(0,t.jsx)(n.strong,{children:`not`}),` map `,(0,t.jsx)(n.code,{children:`u_requested_left_X`}),`.)`]})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),(0,t.jsxs)(n.blockquote,{children:[`
`,(0,t.jsxs)(n.p,{children:[`Variant set per attribute: `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_current_X`})}),`, `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_left_X`})}),`, `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_right_X`})}),`, `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_confirmed_X`})}),`.`]}),`
`]}),(0,t.jsxs)(n.h4,{id:`ac3-fulfiller-logic--map-u_current_-selections-to-_names-outputs`,children:[`AC3 (Fulfiller logic – map `,(0,t.jsx)(n.code,{children:`u_current_*`}),` selections to *_names outputs)`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` the fulfiller list collectors contain only `,(0,t.jsx)(n.code,{children:`u_current_[attribute]`}),` variables, `,(0,t.jsx)(n.strong,{children:`when`}),` the BR runs, `,(0,t.jsx)(n.strong,{children:`then`}),` expand each selected `,(0,t.jsx)(n.code,{children:`u_current_X`}),` as follows. Where an item is "Read Only" for a phase, include it in that phase's *_visible_names list to render as context; where "Hidden," do not add it to any list.`]}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller Read Only (static)`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Current`}),` – `,(0,t.jsx)(n.em,{children:`Initial Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_read_only_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Left`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Right`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Confirmed`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller Initial Visible`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Current`}),` – `,(0,t.jsx)(n.em,{children:`Initial Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Left`}),` – `,(0,t.jsx)(n.em,{children:`Initial Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_requested_left_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Right`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Confirmed`}),` – `,(0,t.jsx)(n.em,{children:`Initial Visible`}),`: add `,(0,t.jsx)(n.code,{children:`u_confirmed_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller Initial Mandatory`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Current`}),` – `,(0,t.jsx)(n.em,{children:`Initial Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Left`}),` – `,(0,t.jsx)(n.em,{children:`Initial Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_requested_left_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Right`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Confirmed`}),` – `,(0,t.jsx)(n.em,{children:`Initial Mandatory`}),`: add `,(0,t.jsx)(n.code,{children:`u_confirmed_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_mandatory_names`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller ERP Visible`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Current`}),` – `,(0,t.jsx)(n.em,{children:`ERP Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Left`}),` – `,(0,t.jsx)(n.em,{children:`ERP Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_requested_left_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Right`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Confirmed`}),` – `,(0,t.jsx)(n.em,{children:`ERP Visible`}),`: add `,(0,t.jsx)(n.code,{children:`u_confirmed_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller ERP Mandatory`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Current`}),` – `,(0,t.jsx)(n.em,{children:`ERP Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_current_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Left`}),` – `,(0,t.jsx)(n.em,{children:`ERP Read Only`}),`: add `,(0,t.jsx)(n.code,{children:`u_requested_left_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Requested Right`}),` – `,(0,t.jsx)(n.em,{children:`Hidden`}),`: `,(0,t.jsx)(n.em,{children:`(no mapping)`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Confirmed`}),` – `,(0,t.jsx)(n.em,{children:`ERP Mandatory`}),`: add `,(0,t.jsx)(n.code,{children:`u_confirmed_X`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_mandatory_names`}),`.`]}),`
`]}),`
`]}),`
`]}),(0,t.jsx)(n.h4,{id:`ac4`,children:`AC4`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Upon`}),` save via UI, API, import set, or Background Script, `,(0,t.jsx)(n.strong,{children:`the system`}),` runs the same server-side derivation and audits changes to the *_names fields.`]}),(0,t.jsx)(n.h4,{id:`ac5`,children:`AC5`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` a variable name that does `,(0,t.jsx)(n.strong,{children:`not`}),` follow the `,(0,t.jsx)(n.code,{children:`u_current_`}),` convention, `,(0,t.jsx)(n.strong,{children:`when`}),` encountered, `,(0,t.jsx)(n.strong,{children:`then`}),` the BR `,(0,t.jsx)(n.strong,{children:`ignores`}),` it for derivation and logs a lightweight info message (no error thrown).`]}),(0,t.jsx)(n.h3,{id:`technical-details`,children:`Technical Details`}),(0,t.jsx)(n.h4,{id:`notes`,children:`Notes`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Table:`}),` Catalog Item Configuration (placeholder: `,(0,t.jsx)(n.code,{children:`x_vm_catalog_item_config`}),`).`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Inputs (list collectors):`}),` Requester Read Only / Visible / Mandatory; Fulfiller Read Only / Initial Visible / Initial Mandatory / ERP Visible / ERP Mandatory. Each contains `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`item_option_new`})}),` rows for `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_current_*`})}),` variables in the Vendor variable set(s).`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Outputs (strings, 10,000 chars):`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Requester: `,(0,t.jsx)(n.code,{children:`u_requester_read_only_names`}),`, `,(0,t.jsx)(n.code,{children:`u_requester_visible_names`}),`, `,(0,t.jsx)(n.code,{children:`u_requester_mandatory_names`})]}),`
`,(0,t.jsxs)(n.li,{children:[`Fulfiller: `,(0,t.jsx)(n.code,{children:`u_fulfiller_read_only_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_mandatory_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),`, `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_mandatory_names`})]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Business Rule:`}),` "`,(0,t.jsx)(n.strong,{children:`Derive Variable Name Lists (Requester & Fulfiller)`}),`"`,`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`When:`}),` after insert, after update`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Run conditions:`}),` run only when any requester/fulfiller list-collector field changes or on new record (`,(0,t.jsx)(n.code,{children:`current.isNewRecord()`}),` or `,(0,t.jsx)(n.code,{children:`changes()`}),` guards).`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`High-level algorithm:`}),` 1) Gather all selected `,(0,t.jsx)(n.code,{children:`item_option_new`}),` sys_ids from the eight list collectors. 2) Query `,(0,t.jsx)(n.code,{children:`item_option_new`}),` `,(0,t.jsx)(n.strong,{children:`once`}),` to build a map `,(0,t.jsx)(n.code,{children:`{sys_id → {name,label}}`}),`. 3) For each `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_current_X`})}),` name, compute variants with helper `,(0,t.jsx)(n.code,{children:`deriveVariants(name)`}),` ⇒ `,(0,t.jsx)(n.code,{children:`{current, reqL, reqR, conf}`}),`. 4) Apply `,(0,t.jsx)(n.strong,{children:`Requester`}),` rules (AC2) to populate requester arrays (respecting `,(0,t.jsx)(n.code,{children:`u_new_or_update`}),`). 5) Apply `,(0,t.jsx)(n.strong,{children:`Fulfiller`}),` rules (AC3) to populate fulfiller arrays. 6) `,(0,t.jsx)(n.strong,{children:`Normalize`}),` each output array: trim, unique, sort alpha; join with comma; write only if changed (avoid audit noise). 7) Skip/log any non-conforming names (AC5).`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Normalization details:`}),` use set-based uniqueness or a hash map; do not force lowercase if naming is standardized; write empty string when an array has no items.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Error handling:`}),` wrap processing in `,(0,t.jsx)(n.code,{children:`try/catch`}),`; on error, `,(0,t.jsx)(n.code,{children:`gs.error`}),` with config record sys_id and context; avoid partial writes (all-or-nothing).`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Performance:`}),` one `,(0,t.jsx)(n.code,{children:`IN`}),` query for all `,(0,t.jsx)(n.code,{children:`item_option_new`}),` ids; no per-row queries; no client/DOM dependencies.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Workspace parity:`}),` 100% server-side derivation; identical for Platform UI, Workspace, and API.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Legacy example (for reference only):`}),` An equivalent Business Rule built against the `,(0,t.jsx)(n.strong,{children:`old schema and field names`}),` exists on the development instance; the record link is carried on the story ticket.`]}),`
`]}),(0,t.jsx)(n.h4,{id:`upstream--downstream-relationships`,children:`Upstream / Downstream Relationships`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Upstream Stories:`}),` Catalog Item Configuration – Reference Qualifiers for Variable Selectors`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Downstream Stories:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Vendor Variable Set – Attribute Triplets Scaffold`}),`
`,(0,t.jsx)(n.li,{children:`Catalog Item (Portal) OnLoad (reads requester *_names)`}),`
`,(0,t.jsx)(n.li,{children:`Catalog Item (Portal) OnSubmit (uses *_names for defaulting/sync)`}),`
`,(0,t.jsx)(n.li,{children:`Fulfiller OnLoad (Initial & Pre-Integration) (reads fulfiller *_names)`}),`
`,(0,t.jsx)(n.li,{children:`Vendor Integration Packaging – Delta-Only JSON Builder`}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Notes:`}),` This BR is the single audited server-side source dictating which `,(0,t.jsx)(n.strong,{children:`variant names`}),` each context should render/enforce.`]}),`
`]}),(0,t.jsx)(n.h3,{id:`test-steps`,children:`Test Steps`}),(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Environment setup`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`For `,(0,t.jsx)(n.strong,{children:`partner QA testing`}),`, log into `,(0,t.jsx)(n.strong,{children:`DEV`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`For `,(0,t.jsx)(n.strong,{children:`client unit testing`}),`, log into `,(0,t.jsx)(n.strong,{children:`TEST`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Requester – Read Only / Visible / Mandatory (New vs Update)`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Set `,(0,t.jsx)(n.code,{children:`u_new_or_update = New`}),`. Select `,(0,t.jsx)(n.code,{children:`u_current_name`}),` in `,(0,t.jsx)(n.strong,{children:`Requester Visible`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → RO names include `,(0,t.jsx)(n.code,{children:`u_current_name`}),`; `,(0,t.jsx)(n.strong,{children:`Visible`}),` includes `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_left_name`})}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Switch to `,(0,t.jsx)(n.code,{children:`u_new_or_update = Update`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → `,(0,t.jsx)(n.strong,{children:`Visible`}),` includes `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`u_requested_right_name`})}),` (left no longer mapped).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Repeat for `,(0,t.jsx)(n.strong,{children:`Requester Mandatory`}),` with expected `,(0,t.jsx)(n.strong,{children:`left/right`}),` behavior.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller – Initial Visible vs Initial Mandatory`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Put `,(0,t.jsx)(n.code,{children:`u_current_tax_id`}),` in `,(0,t.jsx)(n.strong,{children:`Fulfiller Initial Visible`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_visible_names`}),` contains `,(0,t.jsx)(n.code,{children:`u_current_tax_id`}),`, `,(0,t.jsx)(n.code,{children:`u_requested_left_tax_id`}),`, and `,(0,t.jsx)(n.code,{children:`u_confirmed_tax_id`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Move to `,(0,t.jsx)(n.strong,{children:`Fulfiller Initial Mandatory`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_initial_mandatory_names`}),` contains `,(0,t.jsx)(n.code,{children:`u_confirmed_tax_id`}),`; RO context remains via initial-visible names (current + requested_left).`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Fulfiller – ERP Visible vs ERP Mandatory`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Put `,(0,t.jsx)(n.code,{children:`u_current_bank_account`}),` in `,(0,t.jsx)(n.strong,{children:`Fulfiller ERP Visible`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_visible_names`}),` contains `,(0,t.jsx)(n.code,{children:`u_current_bank_account`}),`, `,(0,t.jsx)(n.code,{children:`u_requested_left_bank_account`}),`, and `,(0,t.jsx)(n.code,{children:`u_confirmed_bank_account`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Move to `,(0,t.jsx)(n.strong,{children:`Fulfiller ERP Mandatory`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_erp_mandatory_names`}),` contains `,(0,t.jsx)(n.code,{children:`u_confirmed_bank_account`}),`; RO context remains via ERP-visible names (current + requested_left).`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Static read-only`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`u_current_erp_vendor_id`}),` to `,(0,t.jsx)(n.strong,{children:`Fulfiller Read Only`}),`; `,(0,t.jsx)(n.strong,{children:`Save`}),` → `,(0,t.jsx)(n.code,{children:`u_fulfiller_read_only_names`}),` contains `,(0,t.jsx)(n.code,{children:`u_current_erp_vendor_id`}),` only.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Normalization & non-UI paths`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Create overlapping selections; `,(0,t.jsx)(n.strong,{children:`Save`}),` → *_names fields are unique and sorted.`]}),`
`,(0,t.jsx)(n.li,{children:`Update collectors via Background Script/import; verify identical derivation and audited changes.`}),`
`]}),`
`]}),`
`]})]}),(0,t.jsxs)(r,{title:`Story 2: Table ACL Roles with Hierarchy`,summary:`Security and governance. Every role enumerated against every operation, including the combinations that must fail, and a stated reason the story wasn't split`,minutes:6,children:[(0,t.jsx)(n.h3,{id:`description-1`,children:`Description`}),(0,t.jsxs)(n.p,{children:[`As a `,(0,t.jsx)(n.strong,{children:`ServiceNow Administrator`}),` for the `,(0,t.jsx)(n.strong,{children:`Vendor Management`}),` application, I want to create `,(0,t.jsx)(n.strong,{children:`four per-table roles`}),` (read, write, create, delete) and configure `,(0,t.jsx)(n.strong,{children:`table ACLs`}),` so that access is `,(0,t.jsx)(n.strong,{children:`hierarchical`}),`: `,(0,t.jsx)(n.strong,{children:`read or higher can read; write or higher can write; create or higher can create; and only delete can delete`}),`. This must apply to `,(0,t.jsx)(n.strong,{children:`Choice`}),`, `,(0,t.jsx)(n.strong,{children:`Vendor Contact`}),`, and `,(0,t.jsx)(n.strong,{children:`Approval Step`}),` tables, and the `,(0,t.jsx)(n.strong,{children:`extended Choice tables`}),` (Choice Type, Hierarchy, Category Code, Catalog Item Configuration) must `,(0,t.jsx)(n.strong,{children:`respect the parent Choice ACLs`}),` via inheritance or mirrored rules.`]}),(0,t.jsx)(n.h3,{id:`acceptance-criteria-1`,children:`Acceptance Criteria`}),(0,t.jsx)(n.h4,{id:`ac1-1`,children:`AC1`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` roles are created for each table, `,(0,t.jsx)(n.strong,{children:`then`}),` four roles exist following `,(0,t.jsx)(n.code,{children:`[scope]_[table_key]_{read|write|create|delete}`}),` (e.g., `,(0,t.jsx)(n.code,{children:`x_scope_choice_read`}),`, `,(0,t.jsx)(n.code,{children:`x_scope_choice_write`}),`, `,(0,t.jsx)(n.code,{children:`x_scope_choice_create`}),`, `,(0,t.jsx)(n.code,{children:`x_scope_choice_delete`}),`).`]}),(0,t.jsx)(n.h4,{id:`ac2`,children:`AC2`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` a user who is granted the `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`[scope]_[table_key]_read`})}),` role (and no higher role), `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`read`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action `,(0,t.jsx)(n.strong,{children:`succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`write`}),`, `,(0,t.jsx)(n.strong,{children:`create`}),`, or `,(0,t.jsx)(n.strong,{children:`delete`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` each action is `,(0,t.jsx)(n.strong,{children:`blocked`}),`.`]}),(0,t.jsx)(n.h4,{id:`ac3`,children:`AC3`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` a user who is granted the `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`[scope]_[table_key]_write`})}),` role, `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`read`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action `,(0,t.jsx)(n.strong,{children:`succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`write`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action `,(0,t.jsx)(n.strong,{children:`succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`create`}),` or `,(0,t.jsx)(n.strong,{children:`delete`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` each action is `,(0,t.jsx)(n.strong,{children:`blocked`}),`.`]}),(0,t.jsx)(n.h4,{id:`ac4-1`,children:`AC4`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` a user who is granted the `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`[scope]_[table_key]_create`})}),` role, `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`read`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action `,(0,t.jsx)(n.strong,{children:`succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`write`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action `,(0,t.jsx)(n.strong,{children:`succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`create`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action `,(0,t.jsx)(n.strong,{children:`succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`delete`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` the action is `,(0,t.jsx)(n.strong,{children:`blocked`}),`.`]}),(0,t.jsx)(n.h4,{id:`ac5-1`,children:`AC5`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` a user who is granted the `,(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:`[scope]_[table_key]_delete`})}),` role, `,(0,t.jsx)(n.strong,{children:`when`}),` they attempt to `,(0,t.jsx)(n.strong,{children:`read`}),`, `,(0,t.jsx)(n.strong,{children:`write`}),`, `,(0,t.jsx)(n.strong,{children:`create`}),`, or `,(0,t.jsx)(n.strong,{children:`delete`}),`, `,(0,t.jsx)(n.strong,{children:`then`}),` `,(0,t.jsx)(n.strong,{children:`all`}),` of those actions `,(0,t.jsx)(n.strong,{children:`succeed`}),` on that table.`]}),(0,t.jsx)(n.h4,{id:`ac6`,children:`AC6`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` accessing any `,(0,t.jsx)(n.strong,{children:`extended Choice`}),` table (Choice Type, Hierarchy, Category Code, Catalog Item Configuration), `,(0,t.jsx)(n.strong,{children:`then`}),` effective `,(0,t.jsx)(n.strong,{children:`read / write / create`}),` access `,(0,t.jsx)(n.strong,{children:`matches`}),` the parent `,(0,t.jsx)(n.strong,{children:`Choice`}),` table's ACL intent (inheritance or mirrored ACLs), and `,(0,t.jsx)(n.strong,{children:`delete`}),` remains `,(0,t.jsx)(n.strong,{children:`exclusive`}),` to the child table's `,(0,t.jsx)(n.code,{children:`…_delete`}),` role if delete is permitted.`]}),(0,t.jsxs)(n.blockquote,{children:[`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Note:`}),` This story `,(0,t.jsx)(n.strong,{children:`may be split`}),` at SA/Developer/Scrum discretion `,(0,t.jsx)(n.strong,{children:`by table`}),` if necessary. It was left as one story because the create/test steps are highly similar and combining may reduce administrative time.`]}),`
`]}),(0,t.jsx)(n.h3,{id:`technical-details-1`,children:`Technical Details`}),(0,t.jsx)(n.h4,{id:`notes-1`,children:`Notes`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Tables in scope (minimum):`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Choice`}),` (parent/core)`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Vendor Contact`}),` (scoped vendor contact table)`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Approval Step`}),` (scoped approver definition table)`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Extended Choice children:`}),` `,(0,t.jsx)(n.strong,{children:`Choice Type`}),`, `,(0,t.jsx)(n.strong,{children:`Hierarchy`}),`, `,(0,t.jsx)(n.strong,{children:`Category Code`}),`, `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),` (must `,(0,t.jsx)(n.strong,{children:`respect parent Choice ACLs`}),` per the revised Choice model).`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Role naming pattern:`}),` `,(0,t.jsx)(n.code,{children:`[scope]_[table_key]_{read|write|create|delete}`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`[scope]`}),` = actual scoped app prefix (e.g., `,(0,t.jsx)(n.code,{children:`x_vm_vendor_mgmt`}),`).`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`[table_key]`}),` examples: `,(0,t.jsx)(n.code,{children:`choice`}),`, `,(0,t.jsx)(n.code,{children:`vendor_contact`}),`, `,(0,t.jsx)(n.code,{children:`approval_step`}),`, `,(0,t.jsx)(n.code,{children:`choice_type`}),`, `,(0,t.jsx)(n.code,{children:`hierarchy`}),`, `,(0,t.jsx)(n.code,{children:`category_code`}),`, `,(0,t.jsx)(n.code,{children:`catalog_item_config`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Role hierarchy & independent ACLs:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Configure `,(0,t.jsx)(n.strong,{children:`each action's ACL independently`}),` to require the `,(0,t.jsx)(n.strong,{children:`matching role`}),` (read→`,(0,t.jsx)(n.code,{children:`…_read`}),`, write→`,(0,t.jsx)(n.code,{children:`…_write`}),`, create→`,(0,t.jsx)(n.code,{children:`…_create`}),`, delete→`,(0,t.jsx)(n.code,{children:`…_delete`}),`).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Implement `,(0,t.jsx)(n.strong,{children:`role containment (child roles)`}),` so `,(0,t.jsx)(n.strong,{children:`higher roles include lower roles`}),` for the "or higher" behavior while keeping `,(0,t.jsx)(n.strong,{children:`delete exclusive`}),`.`,`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Example containment chain: `,(0,t.jsx)(n.code,{children:`…_delete`}),` → contains `,(0,t.jsx)(n.code,{children:`…_create`}),`; `,(0,t.jsx)(n.code,{children:`…_create`}),` → contains `,(0,t.jsx)(n.code,{children:`…_write`}),`; `,(0,t.jsx)(n.code,{children:`…_write`}),` → contains `,(0,t.jsx)(n.code,{children:`…_read`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Example:`}),` granting `,(0,t.jsx)(n.strong,{children:`Write`}),` also grants `,(0,t.jsx)(n.strong,{children:`Read`}),` (because `,(0,t.jsx)(n.strong,{children:`Read`}),` is a child of `,(0,t.jsx)(n.strong,{children:`Write`}),`). Granting `,(0,t.jsx)(n.strong,{children:`Create`}),` grants `,(0,t.jsx)(n.strong,{children:`Write`}),` and `,(0,t.jsx)(n.strong,{children:`Read`}),`. `,(0,t.jsx)(n.strong,{children:`Delete`}),` remains exclusive to the `,(0,t.jsx)(n.strong,{children:`delete`}),` role.`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`ACL configuration (table level; Requires role only):`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Read`}),` → require `,(0,t.jsx)(n.code,{children:`…_read`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Write`}),` → require `,(0,t.jsx)(n.code,{children:`…_write`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Create`}),` → require `,(0,t.jsx)(n.code,{children:`…_create`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Delete`}),` → require `,(0,t.jsx)(n.strong,{children:`only`}),` `,(0,t.jsx)(n.code,{children:`…_delete`}),`.`]}),`
`,(0,t.jsx)(n.li,{children:`Because of role containment, higher roles satisfy lower ACLs automatically; delete remains exclusive.`}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Extended Choice tables:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Prefer `,(0,t.jsx)(n.strong,{children:`ACL inheritance`}),` from parent `,(0,t.jsx)(n.strong,{children:`Choice`}),`; if distinct child ACLs are required, `,(0,t.jsx)(n.strong,{children:`mirror`}),` parent and preserve the same containment model.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Maintainability & performance:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Keep ACLs declarative (Requires role) to minimize evaluation overhead.`}),`
`,(0,t.jsx)(n.li,{children:`Package roles/ACLs within the scoped app for promotion.`}),`
`,(0,t.jsxs)(n.li,{children:[`Maintain a matrix of `,(0,t.jsx)(n.strong,{children:`table → roles → ACLs`}),` for audit.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Audit & logging:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Enable table `,(0,t.jsx)(n.strong,{children:`auditing`}),`.`]}),`
`,(0,t.jsx)(n.li,{children:`Consider periodic review reports for users/groups with CRUD roles.`}),`
`]}),`
`]}),`
`]}),(0,t.jsx)(n.h4,{id:`upstream--downstream-relationships-1`,children:`Upstream / Downstream Relationships`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Upstream Stories:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`"Create Scoped Application – Vendor Management"`}),`
`,(0,t.jsx)(n.li,{children:`"Choice – Create core Choice table"`}),`
`,(0,t.jsx)(n.li,{children:`"Vendor Contacts – Create Vendor Contact table (table + fields + default read-only)"`}),`
`,(0,t.jsx)(n.li,{children:`"Approval Step – Create Approval Step table"`}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Downstream Stories:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`"Workspace/Dashboard Access – Restrict by Fulfiller/Data Admin roles"`}),`
`,(0,t.jsx)(n.li,{children:`"Reports – ACL Audit & Review Utilities"`}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Notes:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Establishes the `,(0,t.jsx)(n.strong,{children:`security baseline`}),` for downstream UI, reporting, and governance; ensures child Choice tables `,(0,t.jsx)(n.strong,{children:`do not weaken`}),` parent restrictions.`]}),`
`]}),`
`]}),`
`]}),(0,t.jsx)(n.h3,{id:`test-steps-1`,children:`Test Steps`}),(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Environment setup`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`For `,(0,t.jsx)(n.strong,{children:`partner QA testing`}),`, log into `,(0,t.jsx)(n.strong,{children:`DEV`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`For `,(0,t.jsx)(n.strong,{children:`client unit testing`}),`, log into `,(0,t.jsx)(n.strong,{children:`TEST`}),`.`]}),`
`,(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:`Sample Test Steps. Actual Test Steps TBD during development by Developer and QA.`})}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Verify role existence`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Confirm four roles per table using the defined naming pattern.`}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[`Validate `,(0,t.jsx)(n.code,{children:`…_read`}),` role`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Impersonate user with only `,(0,t.jsx)(n.code,{children:`…_read`}),` → `,(0,t.jsx)(n.strong,{children:`read succeeds`}),`; `,(0,t.jsx)(n.strong,{children:`write/create/delete blocked`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[`Validate `,(0,t.jsx)(n.code,{children:`…_write`}),` role`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`With only `,(0,t.jsx)(n.code,{children:`…_write`}),` (which contains `,(0,t.jsx)(n.code,{children:`…_read`}),`) → `,(0,t.jsx)(n.strong,{children:`read & write succeed`}),`; `,(0,t.jsx)(n.strong,{children:`create/delete blocked`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[`Validate `,(0,t.jsx)(n.code,{children:`…_create`}),` role`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`With only `,(0,t.jsx)(n.code,{children:`…_create`}),` (which contains `,(0,t.jsx)(n.code,{children:`…_write`}),` → `,(0,t.jsx)(n.code,{children:`…_read`}),`) → `,(0,t.jsx)(n.strong,{children:`read, write, create succeed`}),`; `,(0,t.jsx)(n.strong,{children:`delete blocked`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[`Validate `,(0,t.jsx)(n.code,{children:`…_delete`}),` role`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`With only `,(0,t.jsx)(n.code,{children:`…_delete`}),` (contains `,(0,t.jsx)(n.code,{children:`…_create`}),` → `,(0,t.jsx)(n.code,{children:`…_write`}),` → `,(0,t.jsx)(n.code,{children:`…_read`}),`) → `,(0,t.jsx)(n.strong,{children:`read, write, create, delete succeed`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Extended Choice parity`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Spot-check child tables to confirm `,(0,t.jsx)(n.strong,{children:`read/write/create`}),` match parent intent and `,(0,t.jsx)(n.strong,{children:`delete`}),` remains exclusive to the `,(0,t.jsx)(n.strong,{children:`delete`}),` role.`]}),`
`]}),`
`]}),`
`]})]}),(0,t.jsxs)(r,{title:`Story 3: Attachments Variable Set – UI Requirements`,summary:`User-facing form behavior driven entirely by configuration records. Note the explicit out-of-scope line handing server-side enforcement to a separate story`,minutes:6,children:[(0,t.jsx)(n.h3,{id:`description-2`,children:`Description`}),(0,t.jsxs)(n.p,{children:[`As a `,(0,t.jsx)(n.strong,{children:`Requestor`}),` in `,(0,t.jsx)(n.strong,{children:`Employee Center (ESC)`}),`, I want attachment variables to automatically become `,(0,t.jsx)(n.strong,{children:`mandatory`}),` or `,(0,t.jsx)(n.strong,{children:`hidden`}),` based on the selected `,(0,t.jsx)(n.strong,{children:`Category Code`}),`, the current `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),`, and any `,(0,t.jsx)(n.strong,{children:`sector bypass`}),` rules for my `,(0,t.jsx)(n.strong,{children:`On behalf of`}),` user, so that my submission enforces the correct documentation without extra noise.`]}),(0,t.jsx)(n.h3,{id:`acceptance-criteria-2`,children:`Acceptance Criteria`}),(0,t.jsx)(n.h4,{id:`ac1-2`,children:`AC1`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` an attachment type is flagged `,(0,t.jsx)(n.strong,{children:`True`}),` on both the selected `,(0,t.jsx)(n.strong,{children:`Category Code`}),` record and the `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),` record, `,(0,t.jsx)(n.strong,{children:`and`}),` the `,(0,t.jsx)(n.strong,{children:`On behalf of`}),` user's `,(0,t.jsx)(n.strong,{children:`Sector`}),` is `,(0,t.jsx)(n.strong,{children:`not`}),` listed in that attachment type's `,(0,t.jsx)(n.strong,{children:`Sector Bypass`}),` field (on the Catalog Item Configuration), `,(0,t.jsx)(n.strong,{children:`then`}),` the corresponding attachment variable is `,(0,t.jsx)(n.strong,{children:`visible`}),` and `,(0,t.jsx)(n.strong,{children:`mandatory`}),`.`]}),(0,t.jsx)(n.h4,{id:`ac2-1`,children:`AC2`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` the `,(0,t.jsx)(n.strong,{children:`On behalf of`}),` user's `,(0,t.jsx)(n.strong,{children:`Sector`}),` `,(0,t.jsx)(n.strong,{children:`is`}),` listed in the attachment type's `,(0,t.jsx)(n.strong,{children:`Sector Bypass`}),` field on the Catalog Item Configuration, `,(0,t.jsx)(n.strong,{children:`when`}),` the catalog form loads or those inputs change, `,(0,t.jsx)(n.strong,{children:`then`}),` the corresponding attachment variable is `,(0,t.jsx)(n.strong,{children:`hidden`}),` (not visible, not mandatory).`]}),(0,t.jsx)(n.h4,{id:`ac3-1`,children:`AC3`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Given`}),` either the Category Code attribute `,(0,t.jsx)(n.strong,{children:`or`}),` the Catalog Item Configuration attribute for an attachment type is `,(0,t.jsx)(n.strong,{children:`False`}),`, `,(0,t.jsx)(n.strong,{children:`when`}),` the catalog form loads or those inputs change, `,(0,t.jsx)(n.strong,{children:`then`}),` the corresponding attachment variable is `,(0,t.jsx)(n.strong,{children:`hidden`}),` (not visible, not mandatory).`]}),(0,t.jsx)(n.h4,{id:`ac4-2`,children:`AC4`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` the attachment variable `,(0,t.jsx)(n.strong,{children:`Supporting Details`}),` is evaluated, `,(0,t.jsx)(n.strong,{children:`then`}),` it is `,(0,t.jsx)(n.strong,{children:`always visible`}),` on all catalog items and `,(0,t.jsx)(n.strong,{children:`never mandatory`}),`, regardless of Category Code, Catalog Item Configuration, or sector bypass.`]}),(0,t.jsx)(n.h4,{id:`ac5-2`,children:`AC5`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` the user changes `,(0,t.jsx)(n.strong,{children:`On behalf of`}),`, `,(0,t.jsx)(n.strong,{children:`or`}),` changes the `,(0,t.jsx)(n.strong,{children:`Category Code`}),` (for New Vendor requests), `,(0,t.jsx)(n.strong,{children:`or`}),` selects a different `,(0,t.jsx)(n.strong,{children:`Vendor`}),` (for modification requests where Category Code is derived from the selected Vendor), `,(0,t.jsx)(n.strong,{children:`then`}),` all attachment variables are `,(0,t.jsx)(n.strong,{children:`re-evaluated`}),` and their `,(0,t.jsx)(n.strong,{children:`visible/mandatory`}),` states are `,(0,t.jsx)(n.strong,{children:`updated immediately`}),` without requiring a page reload.`]}),(0,t.jsx)(n.h4,{id:`ac6-1`,children:`AC6`}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`When`}),` the same catalog item is opened in different requesting contexts (e.g., `,(0,t.jsx)(n.strong,{children:`New Vendor`}),` vs `,(0,t.jsx)(n.strong,{children:`Change`}),`), `,(0,t.jsx)(n.strong,{children:`then`}),` Category Code is taken from the appropriate source (the `,(0,t.jsx)(n.strong,{children:`Category Code variable`}),` for New Vendor; the `,(0,t.jsx)(n.strong,{children:`selected Vendor's Category Code`}),` for changes) and the attachment rules behave identically per AC1–AC5.`]}),(0,t.jsx)(n.h3,{id:`technical-details-2`,children:`Technical Details`}),(0,t.jsx)(n.h4,{id:`notes-2`,children:`Notes`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Data model alignment:`}),` Attachment flags live on the `,(0,t.jsx)(n.strong,{children:`Category Code`}),` (Choice-extended) record and the `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),` (Choice-extended) record as Boolean fields per attachment type. Each Catalog Item Configuration also includes a `,(0,t.jsx)(n.strong,{children:`"[Attachment Type] Sector Bypass"`}),` multi-select reference to `,(0,t.jsx)(n.strong,{children:`Hierarchy → Sector`}),` nodes (per the revised Choice model).`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Client logic (recommended):`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Implement a `,(0,t.jsx)(n.strong,{children:`Catalog Client Script`}),` (`,(0,t.jsx)(n.code,{children:`onLoad`}),` + `,(0,t.jsx)(n.code,{children:`onChange`}),`) to evaluate all attachment variables in the `,(0,t.jsx)(n.strong,{children:`Attachments`}),` variable set.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Re-evaluate on changes to: `,(0,t.jsx)(n.strong,{children:`On behalf of`}),`, `,(0,t.jsx)(n.strong,{children:`Category Code`}),` (New Vendor), and `,(0,t.jsx)(n.strong,{children:`Selected Vendor`}),` (modifications).`]}),`
`,(0,t.jsxs)(n.li,{children:[`Use `,(0,t.jsx)(n.code,{children:`g_form.setVisible()`}),` and `,(0,t.jsx)(n.code,{children:`g_form.setMandatory()`}),`; `,(0,t.jsx)(n.strong,{children:`no DOM manipulation`}),`.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Server helper (for accuracy & performance):`}),` Provide a `,(0,t.jsx)(n.strong,{children:`Script Include`}),` callable via `,(0,t.jsx)(n.code,{children:`GlideAjax`}),` (e.g., `,(0,t.jsx)(n.code,{children:`AttachmentRuleEvaluator`}),`) that returns, per variable, `,(0,t.jsx)(n.code,{children:`{ visible: true|false, mandatory: true|false }`}),` computed from: 1) Category Code flag, 2) Catalog Item Configuration flag, 3) On-behalf-of user's `,(0,t.jsx)(n.strong,{children:`Sector`}),` vs `,(0,t.jsx)(n.strong,{children:`Sector Bypass`}),` list. Cache lookups during the request.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Naming convention:`}),` Keep variable names aligned with field slugs (e.g., `,(0,t.jsx)(n.code,{children:`u_attachment_w9`}),`, `,(0,t.jsx)(n.code,{children:`u_attachment_coi`}),`); CIC bypass fields like `,(0,t.jsx)(n.code,{children:`u_attachment_w9_sector_bypass`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Out of scope (separate story):`}),` Server-side enforcement on submit to block bypass of required attachments.`]}),`
`]}),(0,t.jsx)(n.h4,{id:`upstream--downstream-relationships-2`,children:`Upstream / Downstream Relationships`}),(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Upstream Stories:`}),` "Create Attachments Variable Set," "Requester Variable Set – Default and Behavior," "Select Vendor Variable Set – Search and Display Attributes," "Catalog Item Configuration – Field and Visibility Rules."`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Downstream Stories:`}),` "Attachments – Server-Side Validation on Submit," "Attachments – Publish to Object Storage and Retention Handling."`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Notes:`}),` Keep Category Code & Catalog Item Configuration field keys synchronized with attachment variable names to ensure deterministic evaluation.`]}),`
`]}),(0,t.jsx)(n.h3,{id:`test-steps-2`,children:`Test Steps`}),(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Environment setup`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`For `,(0,t.jsx)(n.strong,{children:`partner QA testing`}),`, log into `,(0,t.jsx)(n.strong,{children:`DEV`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`For `,(0,t.jsx)(n.strong,{children:`client unit testing`}),`, log into `,(0,t.jsx)(n.strong,{children:`TEST`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Ensure the `,(0,t.jsx)(n.strong,{children:`Variable Set Examples`}),` catalog item includes: `,(0,t.jsx)(n.strong,{children:`Requester`}),`, `,(0,t.jsx)(n.strong,{children:`Select Vendor`}),`, and `,(0,t.jsx)(n.strong,{children:`Attachments`}),` variable sets.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Prepare data`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Create/select a `,(0,t.jsx)(n.strong,{children:`Category Code`}),` (record TBD) with `,(0,t.jsx)(n.strong,{children:`Attachment – W9 = True`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[`On the item's `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),`, set `,(0,t.jsx)(n.strong,{children:`Attachment – W9 = True`}),` and leave `,(0,t.jsx)(n.strong,{children:`Attachment – W9 Sector Bypass`}),` empty.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Identify an `,(0,t.jsx)(n.strong,{children:`On behalf of`}),` user in `,(0,t.jsx)(n.strong,{children:`Sector A`}),` (record TBD).`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Both True, not bypassed → Mandatory`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`New Vendor:`}),` choose the test Category Code.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Change:`}),` select a Vendor whose Category Code matches the test code.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Expected:`}),` `,(0,t.jsx)(n.strong,{children:`W9`}),` is `,(0,t.jsx)(n.strong,{children:`visible & mandatory`}),`. (AC1)`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Bypassed sector → Hidden`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.strong,{children:`Sector A`}),` to `,(0,t.jsx)(n.strong,{children:`Attachment – W9 Sector Bypass`}),` on the Catalog Item Configuration.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Reload or toggle `,(0,t.jsx)(n.strong,{children:`On behalf of`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Expected:`}),` `,(0,t.jsx)(n.strong,{children:`W9`}),` is `,(0,t.jsx)(n.strong,{children:`hidden`}),`. (AC2)`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Either flag False → Hidden`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Set `,(0,t.jsx)(n.strong,{children:`Attachment – W9 = False`}),` on `,(0,t.jsx)(n.strong,{children:`Category Code`}),` `,(0,t.jsx)(n.em,{children:`or`}),` `,(0,t.jsx)(n.strong,{children:`Catalog Item Configuration`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Expected:`}),` `,(0,t.jsx)(n.strong,{children:`W9`}),` is `,(0,t.jsx)(n.strong,{children:`hidden`}),`. (AC3)`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Supporting Details behavior`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Expected:`}),` `,(0,t.jsx)(n.strong,{children:`Supporting Details`}),` is `,(0,t.jsx)(n.strong,{children:`always visible`}),` and `,(0,t.jsx)(n.strong,{children:`never mandatory`}),`. (AC4)`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Change-trigger re-evaluation`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Switch `,(0,t.jsx)(n.strong,{children:`On behalf of`}),` to a user in a different `,(0,t.jsx)(n.strong,{children:`Sector`}),`; toggle `,(0,t.jsx)(n.strong,{children:`Category Code`}),` or `,(0,t.jsx)(n.strong,{children:`Vendor`}),`.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Expected:`}),` All attachment variables update immediately with correct states. (AC5, AC6)`]}),`
`]}),`
`]}),`
`]})]})]}),`
`,(0,t.jsxs)(c,{id:`note`,title:`A note on what these are`,children:[(0,t.jsx)(n.p,{children:`These are anonymized rewrites, not redacted originals. I took three stories I actually wrote and moved them onto a neutral domain: the client isn't named, the scoped application prefix and table names are generic, the internal system names are gone, and a couple of references to specific instances and vendors have been generalized.`}),(0,t.jsx)(n.p,{children:`What hasn't changed is the structure, the section order, the acceptance criteria style, the level of technical detail, and the test steps. If you'd like to talk through how any of these were arrived at, I'm happy to.`})]}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[`The three stories above are anonymized rewrites of stories I wrote on this engagement. The domain details have changed; the structure and the style have not. Engagement status is on the `,(0,t.jsx)(n.a,{href:`/vendor-management`,children:`project page`}),`.`]})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};