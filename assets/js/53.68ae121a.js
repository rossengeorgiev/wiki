(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{326:function(e,t,a){"use strict";a.r(t);var r=a(14),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"almalinux-8-6-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-6-release-notes"}},[e._v("#")]),e._v(" AlmaLinux 8.6 Release Notes")]),e._v(" "),t("p",[e._v("These are the release notes for AlmaLinux OS 8.6 Stable for all supported architectures:")]),e._v(" "),t("ul",[t("li",[e._v("x86_64")]),e._v(" "),t("li",[e._v("aarch64")]),e._v(" "),t("li",[e._v("ppc64le")]),e._v(" "),t("li",[e._v("s390x")])]),e._v(" "),t("p",[e._v("Codename: Sky Tiger.\nDistributed kernel version: 4.18.0-372.9.1.el8.")]),e._v(" "),t("h2",{attrs:{id:"providing-feedback-and-getting-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#providing-feedback-and-getting-help"}},[e._v("#")]),e._v(" Providing Feedback and Getting Help")]),e._v(" "),t("p",[e._v("Please report any issues you may encounter during tests on the "),t("a",{attrs:{href:"https://bugs.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(". Additionally, if you feel like providing feedback, talking about anything or asking any questions you might want to check out "),t("a",{attrs:{href:"https://chat.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community Chat"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://almalinux.discourse.group/c/86/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Forums"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://reddit.com/r/almalinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community on Reddit"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Added new module streams:")]),e._v(" "),t("ul",[t("li",[e._v("PHP 8.0")]),e._v(" "),t("li",[e._v("Perl 5.32")]),e._v(" "),t("li",[e._v("log4j 2")]),e._v(" "),t("li",[e._v("container-tools 4.0")])])]),e._v(" "),t("li",[t("p",[e._v("Added new repositories:")]),e._v(" "),t("ul",[t("li",[e._v("Real Time (RT)")]),e._v(" "),t("li",[e._v("Real Time for NFV (NFV)")])])]),e._v(" "),t("li",[t("p",[e._v("Compiler updates:")]),e._v(" "),t("ul",[t("li",[e._v("GCC Toolset 11")]),e._v(" "),t("li",[e._v("LLVM Toolset 13.0.1")]),e._v(" "),t("li",[e._v("Rust Toolset 1.58.1")]),e._v(" "),t("li",[e._v("Go Toolset 1.17.7")])])]),e._v(" "),t("li",[t("p",[e._v("Added drop-in configuration files support to OpenSSH")])]),e._v(" "),t("li",[t("p",[e._v("Added "),t("code",[e._v("--checksum")]),e._v(" option to the "),t("code",[e._v("semodule")]),e._v(" command to verify the versions of installed SELinux policy modules")])])]),e._v(" "),t("p",[e._v("You can reference the upstream "),t("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/8.6_release_notes/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("RHEL 8.6 release notes"),t("OutboundLink")],1),e._v("  for a full list of changes in this release.")]),e._v(" "),t("h2",{attrs:{id:"installation-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[e._v("#")]),e._v(" Installation instructions")]),e._v(" "),t("p",[e._v("There are three installation ISO images available:")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.6-x86_64-boot.iso")]),e._v(" - a single network installation CD image that downloads packages over the Internet.")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.6-x86_64-minimal.iso")]),e._v(" - a minimal self-containing DVD image that makes possible offline installation.")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.6-x86_64-dvd.iso")]),e._v(" - a full installation DVD image that contains mostly all AlmaLinux packages.")]),e._v(" "),t("p",[e._v("The recommended way to download ISO images is using the "),t("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8.6/isos/x86_64/AlmaLinux-8.6-x86_64.torrent",target:"_blank",rel:"noopener noreferrer"}},[e._v("torrent"),t("OutboundLink")],1),e._v(" links. Alternatively, you can select a mirror closest to your geographic area listed on the "),t("a",{attrs:{href:"https://mirrors.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors.almalinux.org"),t("OutboundLink")],1),e._v(" website. A local mirror will be a lot quicker than using "),t("code",[e._v("repo.almalinux.org")]),e._v(" directly. Then, download a suitable ISO image from the 8.6/isos/$arch/ directory of your source, for example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://mirror.interserver.net/almalinux/8.6/isos/x86_64/AlmaLinux-8.6-x86_64-boot.iso\n")])])]),t("p",[e._v("Download and import the AlmaLinux public key:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n$ gpg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--import")]),e._v(" RPM-GPG-KEY-AlmaLinux\n")])])]),t("p",[e._v("Download and verify a checksums list:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/8.6/isos/x86_64/CHECKSUM\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# we are looking for “Good signature”")]),e._v("\n$ gpg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verify")]),e._v(" CHECKSUM\ngpg: Signature made Wed May "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":11:12 "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),e._v(" UTC\ngpg:                using RSA key 51D6647EC21AD6EA\ngpg: Good signature from "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux <packager@almalinux.org>"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\ngpg: WARNING: This key is not certified with a trusted signature"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n     Subkey fingerprint: E53C F5EF 91CE B0AD "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1812")]),e._v("  ECB8 51D6 647E C21A D6EA\n")])])]),t("p",[e._v("Verify the downloaded ISO image checksum:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# calculate the downloaded ISO SHA256 checksum")]),e._v("\n$ sha256sum AlmaLinux-8.6-x86_64-boot.iso\nde92004fcc5bb5b9af586c9b5ab0e0c7c5a5eedce4d2be85156c5dd31a4fa81b  AlmaLinux-8.6-x86_64-boot.iso\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compare it with expected checksum, it should be the same")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" CHECKSUM "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-E")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SHA256.*AlmaLinux-8.6-x86_64-boot.iso'")]),e._v("\nSHA256 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("AlmaLinux-8.6-x86_64-boot.iso"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" de92004fcc5bb5b9af586c9b5ab0e0c7c5a5eedce4d2be85156c5dd31a4fa81b\n")])])]),t("p",[e._v("If you decide to use the "),t("code",[e._v("AlmaLinux-8.6-x86_64-boot.iso")]),e._v(" image, you will need to provide the "),t("code",[e._v("8.6/BaseOS/x86_64/kickstart/")]),e._v(" repository from the selected mirror as the Installation Source if the installer will not be able to find closest mirror for some reason.")]),e._v(" "),t("p",[e._v("There are no extra Installation Sources required if you decided to go with either the minimal or DVD ISO images.")]),e._v(" "),t("p",[e._v('Notice: the size of the ramdisk has increased. If you encounter remote "ks.cfg not found" this could be due memory limits in your template VM (4GB of RAM is known to work)')]),e._v(" "),t("h2",{attrs:{id:"upgrade-instructions-from-8-5-to-8-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-instructions-from-8-5-to-8-6"}},[e._v("#")]),e._v(" Upgrade Instructions from 8.5 to 8.6")]),e._v(" "),t("p",[e._v("To update your AlmaLinux OS 8.5 Stable to 8.6:")]),e._v(" "),t("p",[t("code",[e._v("$ dnf upgrade -y")])]),e._v(" "),t("p",[e._v("To upgrade from the 8.6 Beta Release run the same command "),t("strong",[e._v("twice")]),e._v(":")]),e._v(" "),t("p",[t("code",[e._v("$ dnf upgrade -y")])]),e._v(" "),t("h2",{attrs:{id:"added-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-packages"}},[e._v("#")]),e._v(" Added packages")]),e._v(" "),t("p",[e._v("Here is a list of added packages in comparison with upstream distribution.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("almalinux-backgrounds")]),e._v(" "),t("td",[e._v("AlmaLinux background images."),t("br"),e._v("Replaces "),t("code",[e._v("redhat-backgrounds")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-indexhtml")]),e._v(" "),t("td",[e._v("AlmaLinux default browser page"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-indexhtml")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-logos")]),e._v(" "),t("td",[e._v("AlmaLinux graphics for OS"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-logos")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-logos-httpd")]),e._v(" "),t("td",[e._v("AlmaLinux graphics for HTTPD server"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-logos-httpd")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-logos-ipa")]),e._v(" "),t("td",[e._v("AlmaLinux graphics for IPA server"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-logos-ipa")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-release")]),e._v(" "),t("td",[e._v("AlmaLinux release package, repos, and EULA"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-release")]),e._v(" and "),t("code",[e._v("redhat-release-eula")])])])])]),e._v(" "),t("h2",{attrs:{id:"removed-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed-packages"}},[e._v("#")]),e._v(" Removed packages")]),e._v(" "),t("p",[e._v("Here is a list of removed packages in comparison with the upstream distribution."),t("br"),e._v("\nAlmaLinux OS is a community distribution so all changes are subject to discussion. If you would like to do so, please join "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/engineeringpackaging",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat"),t("OutboundLink")],1),e._v(" as well as filing a bug report at "),t("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(" to discuss if you think any of the packages below should be included into the repos.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("insights-client")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("kmod-redhat-*")]),e._v(" "),t("td",[e._v("RHEL specific modules from Driver Update Program")])]),e._v(" "),t("tr",[t("td",[e._v("kpatch*")]),e._v(" "),t("td",[e._v("RHEL specific live patches for kernel")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-backgrounds")]),e._v(" "),t("td",[e._v("RHEL specific background images")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-indexhtml")]),e._v(" "),t("td",[e._v("RHEL specific default browser page")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-logos")]),e._v(" "),t("td",[e._v("RHEL specific graphics for OS")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-logos-httpd")]),e._v(" "),t("td",[e._v("RHEL specific graphics for HTTPD server")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-logos-ipa")]),e._v(" "),t("td",[e._v("RHEL specific graphics for IPA server")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-release")]),e._v(" "),t("td",[e._v("RHEL specific release package and repos")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-release-eula")]),e._v(" "),t("td",[e._v("RHEL specific EULA")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-support-lib-python")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-support-tool")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("rhc")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("rhc-worker-playbook")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("rhsm-gtk")]),e._v(" "),t("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("rhsm-icons")]),e._v(" "),t("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("spice-client-win-x64")]),e._v(" "),t("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),t("tr",[t("td",[e._v("spice-client-win-x86")]),e._v(" "),t("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),t("tr",[t("td",[e._v("spice-qxl-wddm-dod")]),e._v(" "),t("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),t("tr",[t("td",[e._v("spice-vdagent-win-x64")]),e._v(" "),t("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),t("tr",[t("td",[e._v("spice-vdagent-win-x86")]),e._v(" "),t("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),t("tr",[t("td",[e._v("subscription-manager-cockpit")]),e._v(" "),t("td",[e._v("RHEL specific Cockpit module for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("subscription-manager-initial-setup-addon")]),e._v(" "),t("td",[e._v("RHEL specific initial setup addon for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("subscription-manager-plugin-container")]),e._v(" "),t("td",[e._v("RHEL specific Subscription Manager plugin for upstream vendor containers")])]),e._v(" "),t("tr",[t("td",[e._v("virt-who")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("virtio-win")]),e._v(" "),t("td",[e._v("Contain binaries built by upstream vendor")])])])]),e._v(" "),t("p",[e._v("Red Hat and RHEL are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.")])])}),[],!1,null,null,null);t.default=s.exports}}]);