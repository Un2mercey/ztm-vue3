<template>
    <form>
        <div class="help">
            <slot name="help"/>
        </div>
        <div class="fields">
            <slot name="fields"/>
        </div>
        <div class="buttons">
            <slot name="buttons"/>
        </div>
        <slot/>
    </form>
</template>

<script>
export default {
    name: "formComponent",
};
</script>

<style lang="scss" scoped>
$color: rgba(0, 128, 64, 0.61);

form {
    border: 1px dashed rgba(0, 128, 64, 0.61);
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    &::v-deep .help h1 {
        color: $color;
    }

    &::v-deep .fields {
        display: flex;
        flex-direction: column;

        input {
            padding: 8px 20px;
            margin: 12px 0;
            border: 1px solid $color;
            border-radius: 4px;
            outline: 0;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

            &::placeholder {
                color: darken($color, 5);
            }

            &:focus {
                color: $color;
                border-color: lighten($color, 5);
                box-shadow: 0 0 0 0.2rem lighten($color, 5);
            }
        }
    }

    &::v-deep .buttons {
        padding: 20px 0;

        button {
            padding: 12px 20px;
            margin: 0;
            text-transform: uppercase;
            background-color: $color;
            border: 1px solid $color;
            border-radius: 4px;
            color: whitesmoke;

            &:hover {
                background-color: lighten($color, 5);
                border-color: lighten($color, 5);
            }

            &:active {
                background-color: darken($color, 5);
                border-color: darken($color, 5);
            }
        }
    }
}
</style>
