# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added config for typescript
- Added component Avatar
- Added component Checkbox
- Added component Image
- Added component Text
- Added slack notification on each release
- Added storybook web
- Added component Loading
- Added component Svg
- Added component Status Chip
- Added component Input
- Added readme
- Added github action to deploy storybooks docs
- Added component LoadingFullScreen

### Changed

- Changed version from react to 17.0.2 and react native to 0.67 and made compatibility for react 18 and react native 0.71
- Changed version of storybook

### Fixed

- Fixed export components
- Fixed an error when locally linking the package with a react native app
- Fixed the error when components are styled using styled-components
- Fixed Input styles at storybook web
- Fixed typescript warnings

### Removed

- Removed standard version package and setup
- Removed Text component inside storybooks folder, and started using it from components
